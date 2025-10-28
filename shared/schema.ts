import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// AI Pilot Scorecard Types (Local Storage Only - No Database)

export const WorkflowTypes = [
  "Contract Review",
  "Legal Research",
  "Document Drafting",
  "Client Intake",
  "Discovery Management",
  "Compliance Monitoring",
  "Due Diligence",
  "Other"
] as const;

export type WorkflowType = typeof WorkflowTypes[number];

// Team Member Schema
export const teamMemberSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  email: z.string().email().optional(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;

// Baseline Metrics Schema
export const baselineMetricsSchema = z.object({
  timePerTask: z.number().min(0, "Time must be positive"),
  timeUnit: z.enum(["minutes", "hours"]),
  errorRate: z.number().min(0).max(100, "Error rate must be between 0-100%"),
  costPerMatter: z.number().min(0, "Cost must be positive"),
  tasksPerWeek: z.number().min(0, "Tasks must be positive"),
  billableRate: z.number().min(0, "Billable rate must be positive"),
});

export type BaselineMetrics = z.infer<typeof baselineMetricsSchema>;

// Red Flag Schema
export const redFlagSchema = z.object({
  id: z.string(),
  week: z.number(),
  type: z.enum(["low_adoption", "accuracy_issue", "resistance", "technical_issue", "other"]),
  description: z.string(),
  severity: z.enum(["low", "medium", "high"]),
  resolved: z.boolean(),
  createdAt: z.string(),
});

export type RedFlag = z.infer<typeof redFlagSchema>;

// Weekly Tracking Schema
export const weeklyTrackingSchema = z.object({
  week: z.number().min(1).max(8),
  adoptionRate: z.number().min(0).max(100),
  attorneysUsing: z.array(z.string()),
  avgTimePerTask: z.number().min(0),
  timeUnit: z.enum(["minutes", "hours"]),
  accuracyRate: z.number().min(0).max(100),
  tasksCompleted: z.number().min(0),
  feedback: z.string().optional(),
  screenshots: z.array(z.string()).optional(),
  redFlags: z.array(redFlagSchema),
  notes: z.string().optional(),
});

export type WeeklyTracking = z.infer<typeof weeklyTrackingSchema>;

// Project Schema
export const aiPilotProjectSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  workflowType: z.enum(WorkflowTypes),
  team: z.array(teamMemberSchema).min(1, "At least one team member required"),
  startDate: z.string(),
  endDate: z.string(),
  baselineMetrics: baselineMetricsSchema,
  weeklyData: z.array(weeklyTrackingSchema),
  status: z.enum(["setup", "in_progress", "completed", "cancelled"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type AIPilotProject = z.infer<typeof aiPilotProjectSchema>;

// ROI Calculation Results
export interface ROICalculation {
  timeSavingsPerWeek: number;
  timeSavingsAnnual: number;
  costSavingsWeekly: number;
  costSavingsMonthly: number;
  costSavingsAnnual: number;
  errorReductionValue: number;
  capacityIncrease: number;
  additionalMattersHandled: number;
  totalFinancialImpact: number;
  roiPercentage: number;
  paybackPeriodWeeks: number;
  recommendation: "continue" | "expand" | "modify" | "discontinue";
  recommendationReason: string;
}

// Benchmark Data
export interface BenchmarkData {
  workflowType: WorkflowType;
  industryTimeSavings: {
    min: number;
    avg: number;
    max: number;
  };
  typicalAdoptionWeeks: number;
  expectedROI: {
    min: number;
    avg: number;
    max: number;
  };
  commonRedFlags: string[];
  solutions: string[];
}
