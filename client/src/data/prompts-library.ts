export interface Prompt {
  id: number;
  title: string;
  category: "Contract Review" | "Discovery & Litigation" | "Legal Research" | "Client Management" | "Due Diligence";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeSavings: string;
  useCase: string;
  technique: string;
  fullPrompt: string;
  verification: string[];
  expectedOutput: string;
}

export const prompts: Prompt[] = [
  // Category 1: Contract Review (5 prompts)
  {
    id: 1,
    title: "Chain-of-Thought Commercial Lease Analysis",
    category: "Contract Review",
    difficulty: "Intermediate",
    timeSavings: "~3 hours per contract",
    useCase: "Review 30-40 page commercial lease for tenant representation with focus on risk mitigation",
    technique: "Chain-of-Thought Prompting",
    fullPrompt: `You are a commercial real estate attorney reviewing a lease on behalf of a tenant. Analyze this document in three phases:

Phase 1: Identify all termination, renewal, and assignment clauses. For each clause, explain your reasoning for why it's significant and whether it favors landlord or tenant.

Phase 2: Review indemnification, liability caps, and insurance provisions. Flag any tenant-unfavorable language and explain why it creates risk.

Phase 3: Compare lease terms to market-standard tenant protections (right to sublease, maintenance obligations, rent escalation caps). Note any deviations and their business impact.

For each phase, show your step-by-step reasoning before stating conclusions.

[PASTE LEASE TEXT HERE]`,
    verification: [
      "Review Phase 1 termination clause findings against lease sections",
      "Verify indemnification language against firm standard positions",
      "Cross-check dates and notice periods",
      "Flag any AI assumptions for manual review"
    ],
    expectedOutput: "4-6 page structured memo with step-by-step reasoning for each lease section analyzed"
  },
  {
    id: 2,
    title: "Self-Reflection NDA Review",
    category: "Contract Review",
    difficulty: "Beginner",
    timeSavings: "~45 minutes per NDA",
    useCase: "Review Non-Disclosure Agreement for technology company with comprehensive risk assessment",
    technique: "Self-Reflection Prompting",
    fullPrompt: `You are reviewing a Non-Disclosure Agreement (NDA) for a technology company. Analyze the following:

1. Scope of confidential information (is it too broad?)
2. Exclusions from confidentiality (are standard carve-outs included?)
3. Term and termination provisions
4. Remedies and liability limitations

After your analysis, review your work and identify:
- Any conclusions based on assumptions vs. explicit contract language
- Any ambiguous terms that require clarification
- Any standard NDA provisions that are missing

Flag these issues clearly.

[PASTE NDA TEXT HERE]`,
    verification: [
      "Confirm all flagged ambiguities are genuine",
      "Check that standard carve-outs are identified",
      "Verify term dates and trigger events"
    ],
    expectedOutput: "2-3 page analysis with explicit flagging of assumptions, ambiguities, and missing provisions"
  },
  {
    id: 3,
    title: "Vendor Agreement Risk Assessment",
    category: "Contract Review",
    difficulty: "Intermediate",
    timeSavings: "~2 hours per agreement",
    useCase: "Evaluate vendor service agreement for compliance, liability, and data protection risks",
    technique: "Chain-of-Thought Prompting",
    fullPrompt: `You are reviewing a vendor service agreement on behalf of a corporate legal department. Conduct a multi-phase risk assessment:

Phase 1: Service Level & Performance
- Identify all SLA commitments, performance metrics, and remedies for non-performance
- Assess whether remedy provisions adequately protect the client
- Note any unreasonable limitations or exclusions

Phase 2: Liability & Indemnification
- Review limitation of liability clauses (caps, exclusions, carve-outs)
- Analyze indemnification provisions for scope and reasonableness
- Flag any one-sided risk allocation

Phase 3: Data Protection & Compliance
- Identify data handling, privacy, and security obligations
- Check for GDPR/CCPA compliance language if applicable
- Review breach notification and incident response terms

For each phase, explain your reasoning step-by-step before conclusions.

[PASTE VENDOR AGREEMENT HERE]`,
    verification: [
      "Verify SLA metrics are clearly defined and measurable",
      "Confirm liability caps are appropriate for contract value",
      "Check data protection clauses against current regulations",
      "Review termination rights and transition obligations"
    ],
    expectedOutput: "3-4 page risk matrix with red-flag issues, medium concerns, and acceptable terms clearly categorized"
  },
  {
    id: 4,
    title: "Employment Agreement Compliance Check",
    category: "Contract Review",
    difficulty: "Beginner",
    timeSavings: "~90 minutes per agreement",
    useCase: "Review employment agreement for compliance with state labor laws and company policies",
    technique: "Checklist-Based Prompting",
    fullPrompt: `You are reviewing an employment agreement for a [STATE] employer. Verify compliance across these dimensions:

1. Compensation & Benefits
- Is compensation structure clearly defined?
- Are overtime exemption classifications accurate?
- Are benefit descriptions consistent with company policy?

2. Non-Compete & Restrictive Covenants
- Is non-compete reasonable in scope, duration, and geography?
- Does it comply with [STATE] law restrictions on non-competes?
- Are non-solicitation provisions appropriately limited?

3. Termination & Severance
- Are termination procedures clearly outlined?
- Do notice requirements comply with state law?
- Are severance provisions (if any) clearly conditioned?

4. Intellectual Property & Confidentiality
- Does IP assignment cover work-for-hire appropriately?
- Are confidentiality terms reasonable and not overly broad?
- Are there appropriate exceptions for employee rights?

For each section, note compliance status and flag any issues.

[PASTE EMPLOYMENT AGREEMENT HERE]`,
    verification: [
      "Confirm state-specific law compliance (non-compete, wage/hour)",
      "Verify IP assignment doesn't overreach into personal projects",
      "Check that at-will language is clear (if applicable)",
      "Review for any discriminatory or illegal provisions"
    ],
    expectedOutput: "Compliance checklist with pass/fail/review status for each provision, plus flagged issues requiring attorney review"
  },
  {
    id: 5,
    title: "M&A Purchase Agreement Key Terms Summary",
    category: "Contract Review",
    difficulty: "Advanced",
    timeSavings: "~4 hours per agreement",
    useCase: "Extract and summarize critical deal terms from complex M&A purchase agreement for executive review",
    technique: "Multi-Phase Chain-of-Thought",
    fullPrompt: `You are reviewing an M&A Purchase Agreement on behalf of the buyer. Create an executive summary covering critical deal terms:

Phase 1: Deal Structure & Consideration
- Purchase price and payment structure
- Earn-out provisions (if any) with conditions and caps
- Working capital adjustments and escrow arrangements
- Explain how each component affects total deal value

Phase 2: Representations, Warranties & Indemnification
- Key seller representations (financial, compliance, contracts, IP, litigation)
- Survival periods for each category
- Indemnification caps, baskets, and escrow funding
- Assess overall risk allocation balance

Phase 3: Conditions Precedent & Deal Protections
- Closing conditions (regulatory approvals, third-party consents)
- Material adverse change (MAC) definition and scope
- Termination rights and break-up fees
- Evaluate deal certainty and execution risk

Phase 4: Post-Closing Obligations
- Transition services agreements
- Non-compete and employment terms for key sellers
- Dispute resolution mechanisms

For each phase, identify deal-favorable vs. deal-unfavorable terms with reasoning.

[PASTE PURCHASE AGREEMENT HERE]`,
    verification: [
      "Verify all dollar amounts and percentages are accurate",
      "Cross-check survival periods against indemnification caps",
      "Confirm MAC definition against market standards",
      "Review escrow release conditions for ambiguities"
    ],
    expectedOutput: "6-8 page executive summary with visual deal structure diagram, risk assessment matrix, and red-flag issues requiring negotiation"
  },

  // Category 2: Discovery & Litigation (4 prompts)
  {
    id: 6,
    title: "Email Discovery Chronology with Self-Reflection",
    category: "Discovery & Litigation",
    difficulty: "Intermediate",
    timeSavings: "~10 hours per matter",
    useCase: "Create chronological summary of email discovery with identification of key facts, admissions, and contradictions",
    technique: "Self-Reflection Prompting",
    fullPrompt: `Summarize these emails chronologically, focusing on communications between [PARTY A] and [PARTY B] regarding [TOPIC].

For each significant exchange:
1. Date and participants
2. Key facts discussed
3. Any admissions, commitments, or contradictions
4. Relevant attachments mentioned

After your summary, review your work and identify:
- Any dates or facts you're uncertain about
- Any conclusions based on inference vs. explicit statements
- Any contradictions between emails you may have missed
- Any gaps in the chronology that suggest missing emails

Flag these issues before finalizing your summary.

[PASTE EMAIL TEXT OR UPLOAD FILES]`,
    verification: [
      "Cross-check flagged date uncertainties against email headers",
      "Review flagged inferences to confirm they're labeled as such",
      "Verify key quotes are accurate",
      "Confirm all participants are correctly identified"
    ],
    expectedOutput: "Chronological narrative with timeline, key facts table, and clearly flagged uncertainties or inferences"
  },
  {
    id: 7,
    title: "Deposition Prep Document Summary",
    category: "Discovery & Litigation",
    difficulty: "Intermediate",
    timeSavings: "~6 hours per deposition",
    useCase: "Synthesize key documents into deposition preparation outline with references",
    technique: "Chain-of-Thought Prompting",
    fullPrompt: `You are preparing for the deposition of [WITNESS NAME] on [TOPIC]. Review the provided documents and create a deposition outline:

Phase 1: Background & Timeline
- Establish witness's role, responsibilities, and relevant time period
- Create timeline of key events witness was involved in
- Identify documents the witness likely authored or received

Phase 2: Key Topics for Examination
- For each topic area, identify:
  * Relevant documents with specific page/paragraph cites
  * Contradictions or inconsistencies to explore
  * Questions to establish foundation before confronting with documents

Phase 3: Impeachment Opportunities
- Flag any prior inconsistent statements
- Identify documents that contradict witness's likely narrative
- Note any gaps or missing documents that raise questions

For each topic, explain why it's important and what you aim to establish.

[PASTE DOCUMENTS OR UPLOAD FILES]`,
    verification: [
      "Verify all document citations are accurate (doc name, page, paragraph)",
      "Confirm timeline events are in correct chronological order",
      "Check that impeachment opportunities are genuinely inconsistent",
      "Review that foundation questions are properly sequenced"
    ],
    expectedOutput: "Structured deposition outline with document exhibits, question sequences, and strategic notes for each topic area"
  },
  {
    id: 8,
    title: "Case Law Research for Motion to Dismiss",
    category: "Discovery & Litigation",
    difficulty: "Advanced",
    timeSavings: "~5 hours per motion",
    useCase: "Research and synthesize case law supporting Rule 12(b)(6) motion to dismiss",
    technique: "Multi-Source Chain-of-Thought",
    fullPrompt: `You are drafting a Motion to Dismiss under Rule 12(b)(6) for failure to state a claim. Research and analyze case law supporting dismissal:

Phase 1: Pleading Standard Analysis
- Identify controlling circuit's pleading standard (Twombly/Iqbal framework)
- Find cases in this jurisdiction applying standard to similar claims
- Extract key language courts use to describe insufficient pleadings

Phase 2: Element-by-Element Analysis
For each cause of action plaintiff alleges:
- Identify required elements under governing law
- Find cases dismissing similar claims for failure to plead specific elements
- Note which elements plaintiff's complaint fails to adequately allege

Phase 3: Case Synthesis
- Group cases by similarity to facts/claims
- Identify strongest precedents (same judge, recent decisions, factual similarity)
- Note any adverse authority and how to distinguish it

For each case, explain step-by-step why it supports dismissal.

[PASTE COMPLAINT AND ANY PRIOR COURT ORDERS]`,
    verification: [
      "Verify all case citations are accurate and current (not reversed/overruled)",
      "Confirm cases are from controlling or persuasive jurisdictions",
      "Check that quoted language is exact and properly cited",
      "Review that factual distinctions from adverse authority are valid"
    ],
    expectedOutput: "4-6 page memorandum with case synthesis, element-by-element deficiency analysis, and citation table organized by strength"
  },
  {
    id: 9,
    title: "Interrogatory Response Drafting",
    category: "Discovery & Litigation",
    difficulty: "Beginner",
    timeSavings: "~3 hours per set",
    useCase: "Draft complete and accurate responses to interrogatories with appropriate objections",
    technique: "Structured Response Prompting",
    fullPrompt: `You are responding to interrogatories on behalf of [CLIENT]. For each interrogatory:

Step 1: Analyze the Request
- Identify what information is being sought
- Determine if request is overly broad, vague, or seeks privileged information
- Assess whether request is relevant and proportional to case needs

Step 2: Draft Objections (if applicable)
- State specific objections (overbreadth, vagueness, privilege, etc.)
- Use standard objection language appropriate for this jurisdiction
- Note if objection is without waiving right to respond

Step 3: Draft Substantive Response
- Provide all responsive non-privileged information within client's possession
- Be complete but precise—don't volunteer unnecessary information
- Cite documents being produced rather than summarizing if appropriate

Step 4: Review for Accuracy
- Flag any responses that require client verification
- Note any responsive information that may not be in client's possession
- Identify any follow-up investigation needed

[PASTE INTERROGATORIES HERE]`,
    verification: [
      "Confirm all objections are legally supported and specific",
      "Verify responses are complete based on available information",
      "Check that no privileged information is disclosed",
      "Review that responses match document production scope"
    ],
    expectedOutput: "Complete interrogatory responses with objections, substantive answers, and notes flagging items requiring client input or additional investigation"
  },

  // Category 3: Legal Research (3 prompts)
  {
    id: 10,
    title: "Chain-of-Thought Statutory Interpretation",
    category: "Legal Research",
    difficulty: "Advanced",
    timeSavings: "~4 hours per research memo",
    useCase: "Analyze complex statutory language to determine client's compliance obligations or legal rights",
    technique: "Chain-of-Thought Prompting",
    fullPrompt: `You are analyzing [STATUTE CITATION] to determine [SPECIFIC LEGAL QUESTION]. Use this structured approach:

Phase 1: Plain Language Analysis
- Read the statute's text carefully
- Identify key terms and their ordinary meanings
- Determine if plain language provides a clear answer
- Note any ambiguities or unclear terms

Phase 2: Statutory Context
- Review the statute's placement within broader statutory scheme
- Analyze related provisions that may inform interpretation
- Check for definitions sections that clarify key terms
- Identify any conflicts between provisions

Phase 3: Legislative History & Purpose
- Review available legislative history (if provided)
- Identify the statute's purpose and policy goals
- Determine which interpretation advances legislative intent
- Note any canons of construction that apply

Phase 4: Judicial Interpretation
- Review case law interpreting this statute (if provided)
- Identify controlling precedent and its reasoning
- Note splits in authority or evolving interpretations
- Assess how courts have resolved ambiguities

For each phase, explain your reasoning before reaching conclusions.

[PASTE STATUTE TEXT AND ANY RELEVANT CASES/LEGISLATIVE HISTORY]`,
    verification: [
      "Verify all statutory citations are accurate",
      "Confirm case law is current and from controlling jurisdiction",
      "Check that canons of construction are correctly applied",
      "Review that conclusion logically follows from analysis"
    ],
    expectedOutput: "5-7 page research memorandum with step-by-step statutory analysis, case synthesis, and clear conclusion with confidence level"
  },
  {
    id: 11,
    title: "Regulatory Compliance Analysis",
    category: "Legal Research",
    difficulty: "Intermediate",
    timeSavings: "~3 hours per compliance check",
    useCase: "Determine whether client's business practices comply with specific regulatory requirements",
    technique: "Checklist-Based Chain-of-Thought",
    fullPrompt: `You are analyzing whether [CLIENT'S PRACTICE] complies with [REGULATION/RULE]. Conduct this compliance assessment:

Step 1: Identify Applicable Requirements
- List all regulatory provisions that apply to this practice
- Determine threshold requirements (who/what is covered)
- Note any exemptions or safe harbors that might apply

Step 2: Map Current Practice to Requirements
For each requirement:
- Describe what the regulation requires
- Describe what client currently does
- Assess compliance status (compliant/non-compliant/unclear)
- Explain reasoning for assessment

Step 3: Identify Compliance Gaps
- List specific requirements where client falls short
- Assess severity of each gap (critical/moderate/minor)
- Note any mitigating factors

Step 4: Flag Enforcement Risk
- Review enforcement priorities from regulatory agency guidance
- Assess likelihood of scrutiny based on industry trends
- Note recent enforcement actions in similar situations

Provide step-by-step reasoning for compliance assessments.

[PASTE REGULATION TEXT AND CLIENT PRACTICE DESCRIPTION]`,
    verification: [
      "Verify all regulatory citations are to current versions",
      "Confirm compliance assessments are based on explicit requirements",
      "Check that exemption analysis is complete and accurate",
      "Review that enforcement risk assessment is evidence-based"
    ],
    expectedOutput: "Compliance matrix showing requirement-by-requirement status, priority-ranked gap list, and risk assessment with recommended corrective actions"
  },
  {
    id: 12,
    title: "Case Law Synthesis for Client Memo",
    category: "Legal Research",
    difficulty: "Intermediate",
    timeSavings: "~4 hours per memo",
    useCase: "Synthesize multiple cases into coherent legal analysis answering client's specific question",
    technique: "Multi-Case Chain-of-Thought",
    fullPrompt: `You are researching [LEGAL ISSUE] to answer this client question: [CLIENT QUESTION]. Synthesize the case law:

Phase 1: Identify the Legal Standard
- Extract the governing legal test or framework from leading cases
- Note if there are competing standards or circuit splits
- Identify which standard applies in this jurisdiction

Phase 2: Analyze How Courts Apply the Standard
For each significant case:
- Summarize key facts similar to or different from client's situation
- Identify which factors court found determinative
- Note outcome and court's reasoning
- Explain how case informs client's question

Phase 3: Identify Trends and Patterns
- Group cases by common factors or outcomes
- Identify which facts tend to lead to which results
- Note any evolving or shifting standards
- Flag any recent cases that signal direction of law

Phase 4: Apply to Client's Facts
- Compare client's facts to fact patterns in cases
- Predict likely outcome based on synthesis
- Note factors that strengthen or weaken client's position
- Identify any factual gaps that need investigation

Provide reasoning for each analytical step.

[PASTE CASES OR LEGAL ISSUE DESCRIPTION]`,
    verification: [
      "Verify all case citations and quotes are accurate",
      "Confirm cases are good law (not reversed or overruled)",
      "Check that factual comparisons to client situation are apt",
      "Review that conclusion reflects weight of authority"
    ],
    expectedOutput: "Client-ready memorandum with synthesized legal standard, case analysis organized by outcome/factors, and practical advice applying law to client's facts"
  },

  // Category 4: Client Management (3 prompts)
  {
    id: 13,
    title: "Client Intake Summary",
    category: "Client Management",
    difficulty: "Beginner",
    timeSavings: "~45 minutes per intake",
    useCase: "Convert raw intake notes into structured client matter summary for case management system",
    technique: "Structured Extraction",
    fullPrompt: `You are summarizing a client intake consultation. Extract and organize this information:

1. Client & Matter Identification
- Client name and contact information
- Matter type and description
- Opposing party (if applicable)
- Key dates and deadlines

2. Factual Background
- Chronological summary of events leading to consultation
- Key facts relevant to legal issue
- Client's objectives and desired outcome

3. Legal Issues Identified
- Primary legal issues presented
- Potential causes of action or defenses
- Jurisdictional considerations

4. Next Steps & Action Items
- Immediate actions required (conflicts check, statute of limitations, etc.)
- Information/documents needed from client
- Preliminary legal research needed
- Proposed engagement scope

5. Red Flags & Special Considerations
- Conflicts of interest to check
- Statute of limitations concerns
- Fee arrangement considerations
- Any credibility or case strength concerns

[PASTE INTAKE NOTES OR TRANSCRIPT]`,
    verification: [
      "Confirm all deadlines and dates are accurately captured",
      "Verify client contact information is complete",
      "Check that all red flags are noted",
      "Review that next steps are actionable and specific"
    ],
    expectedOutput: "Structured intake summary ready for case management system entry, with flagged action items and deadline reminders"
  },
  {
    id: 14,
    title: "Engagement Letter Drafting",
    category: "Client Management",
    difficulty: "Beginner",
    timeSavings: "~30 minutes per letter",
    useCase: "Draft customized engagement letter based on matter type and fee arrangement",
    technique: "Template Customization",
    fullPrompt: `You are drafting an engagement letter for [CLIENT NAME] for [MATTER TYPE]. Include these elements:

1. Scope of Representation
- Specific matter description
- What is included in scope
- What is explicitly excluded from scope
- Conditions that might change scope

2. Fee Arrangement
- Billing structure ([HOURLY/FLAT FEE/CONTINGENCY/HYBRID])
- Rates for different timekeepers (if hourly)
- Payment schedule and terms
- Retainer amount and replenishment terms
- Expenses and costs (how billed, client approval thresholds)

3. Client Responsibilities
- Cooperation and communication requirements
- Document/information provision obligations
- Payment obligations and consequences of non-payment

4. Engagement Terms
- Termination provisions (by client or firm)
- File retention policy
- Dispute resolution (arbitration clause if applicable)
- Governing law

5. Disclaimers & Limitations
- No guarantee of outcome
- Independent judgment preserved
- Conflicts waiver (if applicable)

Use clear, client-friendly language. Flag any unusual terms requiring explanation.

[PROVIDE MATTER DETAILS AND FEE ARRANGEMENT]`,
    verification: [
      "Confirm fee arrangement terms are clear and complete",
      "Verify scope description matches intended representation",
      "Check that all state bar requirements are met",
      "Review that payment terms and deadlines are specific"
    ],
    expectedOutput: "Complete engagement letter in professional format, ready for attorney review and client signature"
  },
  {
    id: 15,
    title: "Client Update Email (Matter Status)",
    category: "Client Management",
    difficulty: "Beginner",
    timeSavings: "~20 minutes per update",
    useCase: "Draft professional status update email to keep client informed of matter progress",
    technique: "Structured Communication",
    fullPrompt: `You are drafting a status update email to [CLIENT NAME] about [MATTER]. Structure it as follows:

1. Opening & Context
- Brief greeting and reference to matter
- Quick reminder of where things stood in last update

2. Recent Developments
- What has happened since last update (chronologically)
- Any significant events, filings, or communications
- Actions taken by firm on client's behalf

3. Current Status
- Where matter stands now
- Any pending deadlines or upcoming events
- Status of any action items from client

4. Next Steps & Timeline
- What will happen next
- Specific actions firm will take and when
- Any action required from client (with clear deadlines)
- Anticipated timeline for key milestones

5. Questions & Concerns
- Address any questions client has raised
- Invite questions or concerns
- Provide contact information for follow-up

Tone: Professional but warm, clear and jargon-free, proactive and reassuring

[PROVIDE MATTER DETAILS AND RECENT ACTIVITY]`,
    verification: [
      "Confirm all dates and deadlines are accurate",
      "Verify no privileged strategy is disclosed (if email might be forwarded)",
      "Check that client action items are clearly stated",
      "Review that tone is appropriate for client relationship"
    ],
    expectedOutput: "Client-ready email that informs without overwhelming, maintains confidence, and clearly communicates next steps"
  },

  // Category 5: Due Diligence (3 prompts)
  {
    id: 16,
    title: "Corporate Records Review Checklist",
    category: "Due Diligence",
    difficulty: "Intermediate",
    timeSavings: "~3 hours per transaction",
    useCase: "Review corporate formation documents and governance records for M&A or investment due diligence",
    technique: "Checklist-Based Review",
    fullPrompt: `You are conducting corporate due diligence on [TARGET COMPANY] for [ACQUISITION/INVESTMENT]. Review corporate records:

1. Formation & Existence
- Certificate/Articles of Incorporation (review for authorized shares, preferences, restrictions)
- Good standing certificates from state of incorporation and foreign qualifications
- Name registrations and DBAs
- Flag: Any issues with corporate status or naming rights

2. Governance Documents
- Bylaws (check for supermajority voting, notice requirements, amendment provisions)
- Board and Shareholder meeting minutes (verify major actions were approved)
- Written consents (verify proper execution)
- Flag: Any governance irregularities or missing authorizations

3. Capitalization
- Stock ledger and cap table (verify all issuances, transfers, cancellations)
- Stock certificates and option agreements
- Voting agreements and stockholder arrangements
- Flag: Any discrepancies between records, unauthorized issuances, or transfer restrictions

4. Material Contracts & Commitments
- Employment/consulting agreements with change-of-control provisions
- Customer/vendor contracts requiring consent for transaction
- Debt agreements with change-of-control triggers
- Flag: Any consents required or triggered provisions

For each category, note compliance status and red flags.

[PASTE CORPORATE DOCUMENTS OR PROVIDE ACCESS]`,
    verification: [
      "Verify all corporate actions had proper board/shareholder approval",
      "Confirm cap table reconciles with stock ledger and certificates",
      "Check that all material contracts have been identified",
      "Review that good standing is current in all relevant jurisdictions"
    ],
    expectedOutput: "Due diligence checklist with red/yellow/green status indicators, summary of material issues, and list of missing or deficient documents"
  },
  {
    id: 17,
    title: "Real Estate Due Diligence Document Analysis",
    category: "Due Diligence",
    difficulty: "Intermediate",
    timeSavings: "~5 hours per property",
    useCase: "Review title, survey, environmental, and lease documents for commercial real estate acquisition",
    technique: "Multi-Document Chain-of-Thought",
    fullPrompt: `You are conducting due diligence on [PROPERTY ADDRESS] for acquisition. Review documents in phases:

Phase 1: Title Review
- Examine title commitment and underlying documents
- Identify all exceptions to coverage (easements, restrictions, liens, encumbrances)
- Assess impact of each exception on intended use
- Flag: Any title defects requiring cure or affecting value

Phase 2: Survey Analysis
- Review ALTA survey for boundary, easement, and encroachment issues
- Cross-reference survey with title commitment
- Identify any survey matters not shown on title commitment
- Flag: Encroachments, boundary disputes, or access issues

Phase 3: Environmental Assessment
- Review Phase I ESA for recognized environmental conditions
- Note any recommendations for Phase II investigation
- Check compliance with environmental laws
- Flag: Any contamination or potential liability

Phase 4: Lease Review (if applicable)
- Summarize each lease (tenant, space, term, rent, key terms)
- Identify any lease provisions triggered by sale (consent rights, ROFO/ROFR, termination)
- Calculate rent roll and verify against seller's representation
- Flag: Any problematic leases or tenant issues

For each phase, explain reasoning for flagged issues.

[PASTE TITLE COMMITMENT, SURVEY, ENVIRONMENTAL REPORT, LEASES]`,
    verification: [
      "Verify all title exceptions are accounted for in analysis",
      "Confirm survey date is within acceptable period",
      "Check that environmental recommendations are noted",
      "Review that rent roll calculations are accurate"
    ],
    expectedOutput: "Comprehensive due diligence report with issue log prioritized by severity, recommended title insurance endorsements, and environmental follow-up items"
  },
  {
    id: 18,
    title: "IP Portfolio Assessment",
    category: "Due Diligence",
    difficulty: "Advanced",
    timeSavings: "~6 hours per portfolio",
    useCase: "Analyze intellectual property portfolio for M&A transaction or investment due diligence",
    technique: "Multi-Category Chain-of-Thought",
    fullPrompt: `You are conducting IP due diligence on [TARGET COMPANY]'s intellectual property portfolio. Analyze systematically:

Phase 1: Patent Portfolio
- Review patent list (issued and pending)
- Check status, jurisdiction, and maintenance fee payment status
- Identify core vs. peripheral patents
- Assess coverage of company's main products/services
- Flag: Any abandoned patents, maintenance issues, or coverage gaps

Phase 2: Trademark Portfolio
- Review trademark registrations and applications
- Verify use in commerce and renewal status
- Check for any oppositions or cancellation proceedings
- Assess strength (inherent distinctiveness, fame, enforcement history)
- Flag: Any weak marks, pending challenges, or renewal deadlines

Phase 3: Copyright & Trade Secrets
- Identify copyrighted works and registration status
- Review trade secret policies and protection measures
- Assess employee/contractor IP assignment agreements
- Flag: Any unregistered copyrights or inadequate trade secret protection

Phase 4: IP Agreements & Encumbrances
- Review licenses (in-bound and out-bound)
- Identify any exclusive licenses, revenue-sharing, or limitations
- Check for open source software usage and compliance
- Assess assignment documentation chain of title
- Flag: Any encumbrances, royalty obligations, or ownership gaps

Phase 5: IP Disputes & Risks
- Review litigation history and current disputes
- Identify any freedom-to-operate concerns
- Assess competitor IP landscape
- Flag: Any material risks or ongoing disputes

For each phase, provide reasoning for risk assessments.

[PASTE IP PORTFOLIO DOCUMENTATION]`,
    verification: [
      "Verify all patent and trademark numbers and status are accurate",
      "Confirm maintenance fees are current for key IP",
      "Check that all IP agreements have been reviewed",
      "Review that chain of title is complete for material IP"
    ],
    expectedOutput: "IP due diligence memorandum with portfolio summary, risk matrix by IP category, priority issues requiring cure or disclosure, and valuation considerations"
  }
];

export const categories = [
  "All",
  "Contract Review",
  "Discovery & Litigation",
  "Legal Research",
  "Client Management",
  "Due Diligence"
] as const;