export const CASE_STUDIES = [
  {
    id: "tactile-ai-vision",
    title: "Tactile AI Vision: Giving 'Verbs' to the Visually Impaired",
    keyStat: "92% Accuracy",
    keyFocus: " ",
    assistiveTech: "YOLO v8 · Swell Paper · OpenCV",
    // This array drives the entire blog page
    content: [
      {
        type: "lead",
        text: "Visual graphics remain largely inaccessible to the 285 million people worldwide with visual impairments. My research at the University of Bath aims to close this gap by introducing 'Actions' into tactile graphics."
      },
      {
        type: "heading",
        text: "The 'Noun' Trap in Accessibility"
      },
      {
        type: "paragraph",
        text: "Traditional tactile generators identify objects—the 'nouns'—but fail to convey the 'verbs.' If a man is walking a dog, knowing there is a 'man' and a 'dog' is insufficient. The 'walking' is the essence of the visual data."
      },
      {
        type: "quote",
        text: "Without verbs, a sentence is incomplete. Without action, a tactile image is a static list of things."
      },
      {
        type: "heading",
        text: "Technical Methodology"
      },
      {
        type: "list",
        items: [
          "Action Classification: Custom layer atop YOLO neural network to identify human poses.",
          "Tactile Mapping: Translating recognized verbs into simplified geometric icons.",
          "Physical Output: Using Swell Paper and Thermal Fusion to create 2.5D surfaces."
        ]
      }
    ],
    footerNote: "MSc Computer Science | The University of Bath | 2023-2024"
  },
  {
    id: "accessibility-mentorship",
    title: "The 'Shift Left' Strategy: Engineering a Culture of Accessibility",
    keyStat: "60% Reduction in Remediation Costs",
    keyFocus: " ",
    assistiveTech: "Axe-core · Screen Readers · WCAG 2.2 · GitHub Actions",
    content: [
      {
        type: "lead",
        text: "Accessibility is often treated as a 'final coat of paint' applied just before launch. I transformed a 50-person engineering department by moving accessibility to the very start of the development lifecycle."
      },
      {
        type: "heading",
        text: "The Problem: The 'Bug-Fix' Cycle"
      },
      {
        type: "paragraph",
        text: "When I joined the team, accessibility audits were performed a week before production. This led to expensive code rewrites, delayed launches, and frustrated developers. We weren't building accessible products; we were just fixing broken ones."
      },
      {
        type: "quote",
        text: "Don't just audit for compliance; mentor for inclusion."
      },
      {
        type: "heading",
        text: "The Mentorship Framework"
      },
      {
        type: "paragraph",
        text: "I established a 'Champions' program where one developer in every squad was trained as an accessibility lead. My mentorship focused on three pillars:"
      },
      {
        type: "list",
        items: [
          "Empathy-Driven Testing: Teaching devs to navigate their own PRs using only a keyboard and a screen reader (NVDA/VoiceOver).",
          "Automated Guardrails: Integrating Axe-core into our CI/CD pipeline to catch 40% of low-hanging accessibility issues before human review.",
          "Component-Level WCAG: Building a shared accessible UI library so devs could 'import' compliance without needing to be experts."
        ]
      },
      {
        type: "heading",
        text: "Measurable Impact"
      },
      {
        type: "paragraph",
        text: "By the end of the first quarter, we saw a total shift in our metrics. High-priority accessibility bugs dropped to near zero, and the team’s velocity increased because we stopped having to re-code UI components after they were 'finished.'"
      }
    ],
    footerNote: "Project Lead & Accessibility Architect | 2024 Initiatives"
  },
  {
    id: "wcag-deep-dive",
    title: "Decoding WCAG: A Deep Dive into Complex UI Violations",
    keyStat: "4,000+ Defects Audited & Resolved",
    keyFocus: " ",
    assistiveTech: "JAWS · NVDA · VoiceOver · CCA · Inspect Tool",
    content: [
      {
        type: "lead",
        text: "During my tenure at Tech Mahindra and Applause, I audited thousands of digital products. True accessibility isn't about passing an automated scan—it's about understanding how Success Criteria (SC) protect the user experience."
      },
      {
        type: "heading",
        text: "Case Study: The 'Ghost' Interactive Element"
      },
      {
        type: "paragraph",
        text: "One of the most common violations I identify is a failure of **SC 2.1.1 (Keyboard)**. On a major AT&T application, a 'Tap to Chat' module was visually perfect but completely unreachable via Tab key. I didn't just report the bug; I mapped the fix using a Focus Trap and proper TabIndex management."
      },
      {
        type: "heading",
        text: "The Complexity of Color and Contrast"
      },
      {
        type: "paragraph",
        text: "Most people understand **SC 1.4.3 (Contrast)** for text, but I specialize in the nuances of **SC 1.4.11 (Non-text Contrast)**. For the Workboard dashboard, I audited graphical boundaries and UI states (hover/focus) to ensure that even users with low vision could distinguish between active and inactive task cards."
      },
      {
        type: "quote",
        text: "Compliance is the floor, not the ceiling. A site can be 100% compliant and still 0% usable."
      },
      {
        type: "heading",
        text: "My 'Big Three' Audit Framework"
      },
      {
        type: "paragraph",
        text: "When I perform an audit, I look for these three high-impact areas that often represent the difference between a working product and a blocked user:"
      },
      {
        type: "list",
        items: [
          "SC 4.1.2 (Name, Role, Value): Ensuring custom ARIA widgets (like accordions or tabs) communicate their state correctly to screen readers.",
          "SC 1.3.1 (Info and Relationships): Verifying that the visual hierarchy (headings, lists) is reflected in the DOM structure.",
          "SC 3.3.2 (Labels or Instructions): Ensuring forms don't just look pretty, but provide clear, persistent instructions for error recovery."
        ]
      },
      {
        type: "heading",
        text: "From Audit to Actionable Code"
      },
      {
        type: "paragraph",
        text: "I provide remediation guides that don't just say 'Fix this.' I provide the HTML/ARIA snippet. For example, replacing a <div> click handler with a <button> or adding aria-expanded to a toggle, reducing the 'back-and-forth' between QA and Dev by 15%."
      }
    ],
    footerNote: "Certified Accessibility Consultant | Expert in WCAG 2.0, 2.1, 2.2"
  }
];

export const getCaseStudyById = (id) => CASE_STUDIES.find(s => s.id === id);