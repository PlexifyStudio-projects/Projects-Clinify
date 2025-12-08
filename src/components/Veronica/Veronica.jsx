import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Veronica.scss';

const Veronica = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Helper function to get random item from array
  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Conversation flow with multiple response variations
  const conversationFlow = useMemo(() => ({
    initial: {
      responses: [
        "Hi there! I'm Veronica, your virtual assistant at NeuroFysY. How can I help you today?",
        "Hello! I'm Veronica from NeuroFysY. What can I assist you with?",
        "Welcome! I'm Veronica, here to help you learn about NeuroFysY. What would you like to know?",
        "Hey! Veronica here, your NeuroFysY guide. How may I assist you today?",
        "Hi! I'm Veronica, ready to help you explore NeuroFysY. What interests you?",
        "Hello there! Veronica at your service. What brings you to NeuroFysY today?",
        "Welcome to NeuroFysY! I'm Veronica, your virtual assistant. How can I help?",
        "Hi! I'm Veronica. I'd love to help you discover what NeuroFysY can do for you!",
        "Hello! Veronica here from NeuroFysY. What questions can I answer for you?",
        "Hey there! I'm Veronica, your friendly NeuroFysY assistant. What can I do for you?"
      ],
      options: [
        { label: "Tell me about NeuroFysY", next: "about" },
        { label: "What are the prices?", next: "pricing" },
        { label: "I need help", next: "support" },
        { label: "Schedule a demo", next: "demo" }
      ]
    },
    about: {
      responses: [
        "NeuroFysY is a complete EMR platform designed specifically for rehabilitation professionals. We support Physical Therapy, Occupational Therapy, and Speech Therapy clinics with AI-powered documentation, scheduling, and billing.",
        "We built NeuroFysY to help PT, OT, and ST professionals spend less time on paperwork and more time with patients. It's an all-in-one EMR with smart documentation tools.",
        "NeuroFysY is your complete practice management solution for rehabilitation therapy. From clinical notes to billing, we've got everything PT, OT, and ST clinics need.",
        "Think of NeuroFysY as your clinic's digital backbone - handling documentation, scheduling, billing, and patient management specifically designed for rehab therapists.",
        "NeuroFysY combines AI-powered clinical documentation with practice management tools built exclusively for Physical, Occupational, and Speech Therapy.",
        "We created NeuroFysY to solve the documentation burden that therapists face daily. It's a specialized EMR for PT, OT, and ST with intelligent features.",
        "NeuroFysY is where rehabilitation meets innovation - an EMR platform that understands the unique needs of therapy clinics and their patients.",
        "Our platform serves PT, OT, and ST professionals with intuitive tools for documentation, scheduling, assessments, and billing - all in one place.",
        "NeuroFysY was designed by people who understand therapy clinics. We offer AI documentation, 90+ assessments, and seamless billing integration.",
        "Simply put, NeuroFysY helps rehabilitation clinics run more efficiently with less paperwork and better patient outcomes."
      ],
      options: [
        { label: "What features do you offer?", next: "features" },
        { label: "Who is this for?", next: "audience" },
        { label: "What makes you different?", next: "difference" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    features: {
      responses: [
        "Our standout features include:\n\n• AI-Powered Clinical Notes - Generate compliant documentation in seconds\n• 90+ Clinical Assessments - Berg, Tinetti, TUG, Katz ADL, and more\n• Smart Scheduling - Manage appointments with ease\n• Integrated Billing - Automated coding and claims\n• HIPAA Compliant - Enterprise-grade security",
        "Here's what makes NeuroFysY powerful:\n\n• Voice-to-text documentation with AI assistance\n• Library of 90+ validated clinical assessments\n• Appointment scheduling and reminders\n• Billing automation with compliance checking\n• Secure, HIPAA-compliant infrastructure",
        "NeuroFysY comes packed with:\n\n• AI that writes clinical notes in under 30 seconds\n• 90+ assessments (Berg, Tinetti, SLUMS, etc.)\n• Patient scheduling and management\n• Claims processing and billing tools\n• Bank-level security and HIPAA compliance",
        "Key features you'll love:\n\n• Smart documentation powered by AI\n• Comprehensive assessment library (90+)\n• Intuitive scheduling system\n• Automated billing workflow\n• Full HIPAA compliance",
        "What we offer:\n\n• AI-assisted clinical documentation\n• 90+ evidence-based assessments\n• Practice scheduling tools\n• Revenue cycle management\n• Secure cloud platform",
        "NeuroFysY features include:\n\n• Real-time AI documentation during sessions\n• Standardized assessments for PT, OT, ST\n• Calendar and scheduling management\n• Billing and claims automation\n• HIPAA-secure environment",
        "Our platform provides:\n\n• Voice-enabled clinical note generation\n• Assessment tools (Berg Balance, TUG, etc.)\n• Patient appointment management\n• Integrated billing solutions\n• Complete data security",
        "What's included:\n\n• AI that understands clinical language\n• 90+ assessment tools ready to use\n• Smart scheduling features\n• One-click billing submission\n• Enterprise security standards",
        "Feature highlights:\n\n• Documentation in seconds with AI\n• Full assessment library for all disciplines\n• Streamlined scheduling\n• Automated revenue management\n• HIPAA and security compliance",
        "You get access to:\n\n• Next-gen AI documentation tools\n• Complete clinical assessment suite\n• Flexible scheduling system\n• Built-in billing capabilities\n• Top-tier security measures"
      ],
      options: [
        { label: "Tell me about AI notes", next: "ai_docs" },
        { label: "What assessments?", next: "assessments" },
        { label: "Schedule a demo", next: "demo" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    ai_docs: {
      responses: [
        "Our AI documentation is a game-changer! It listens to your session, understands clinical context, and generates compliant notes in under 30 seconds. Therapists save 2+ hours daily!",
        "The AI documentation feature lets you document while treating. Speak naturally, and our system creates accurate, compliant clinical notes automatically.",
        "Imagine finishing your notes before the patient leaves! Our AI captures your session, suggests appropriate codes, and creates documentation that's ready to submit.",
        "Our AI listens during your session and transforms conversations into professional clinical notes. It understands therapy terminology and ensures compliance.",
        "With AI-powered notes, you can focus on your patient while we handle the paperwork. Real-time transcription plus intelligent formatting equals notes in seconds.",
        "The documentation AI learns from therapy sessions to produce accurate, detailed notes. Most therapists tell us they've reclaimed 2-3 hours every day.",
        "Voice-to-text is just the beginning. Our AI understands clinical context, suggests billing codes, and creates notes that pass compliance reviews.",
        "No more staying late to finish notes! Our AI generates documentation during or right after sessions, complete with goals, interventions, and progress.",
        "Our intelligent documentation system captures everything - assessments, interventions, patient responses - and organizes it into compliant clinical notes.",
        "Think of it as having a documentation assistant. Speak naturally during treatment, and get professional notes ready for review in under 30 seconds."
      ],
      options: [
        { label: "I want to see a demo!", next: "demo" },
        { label: "What's the pricing?", next: "pricing" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    assessments: {
      responses: [
        "We include 90+ validated clinical assessments:\n\n• Balance: Berg Balance Scale, Tinetti, TUG\n• ADL: Katz ADL, Barthel Index\n• Cognitive: SLUMS, MMSE, MoCA\n• Pain scales and functional measures\n\nAll auto-populate into your notes!",
        "Our assessment library covers:\n\n• Balance & Mobility: Berg, Tinetti, TUG, 6MWT\n• Functional Status: Katz ADL, Barthel, FIM\n• Cognitive Screening: SLUMS, MMSE\n• Pain: VAS, McGill, NPRS\n\nResults flow directly into documentation.",
        "90+ assessments at your fingertips:\n\n• Physical Therapy: Balance, gait, strength tests\n• Occupational Therapy: ADL, fine motor assessments\n• Speech Therapy: Swallow, language evaluations\n\nAll integrated with your clinical notes.",
        "We've got comprehensive assessments for every discipline:\n\n• PT: Berg, Tinetti, Manual Muscle Testing\n• OT: Barthel Index, Katz ADL\n• ST: Swallowing assessments, cognitive screens\n\nEverything connects to your documentation.",
        "Assessment tools include:\n\n• Standardized balance tests (Berg, TUG)\n• Functional independence measures\n• Cognitive screenings (SLUMS, MMSE)\n• Discipline-specific evaluations\n\nAll populate into notes automatically.",
        "Your assessment arsenal:\n\n• 90+ validated clinical tools\n• Balance, mobility, ADL measures\n• Cognitive and pain assessments\n• Custom assessment builders\n\nResults integrate seamlessly with notes.",
        "Full assessment suite including:\n\n• Berg Balance, Tinetti POMA\n• Timed Up and Go (TUG)\n• Katz ADL, Barthel Index\n• SLUMS, Montreal Cognitive\n\nEvery result auto-populates!",
        "We support assessments like:\n\n• Balance: Berg (0-56), Tinetti, TUG\n• Function: Barthel, Katz, FIM\n• Cognitive: SLUMS, MMSE, MoCA\n\nAll built into your workflow.",
        "Clinical assessments available:\n\n• Physical function measures\n• Activities of daily living scales\n• Cognitive screening tools\n• Pain and quality of life measures\n\n90+ tools, all documentation-ready.",
        "Our library has everything:\n\n• Evidence-based balance assessments\n• Standardized functional measures\n• Cognitive and mental status exams\n• Specialty-specific evaluations\n\nScores automatically in your notes."
      ],
      options: [
        { label: "Schedule a demo", next: "demo" },
        { label: "What's the pricing?", next: "pricing" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    audience: {
      responses: [
        "NeuroFysY is built for:\n\n• Physical Therapy Clinics\n• Occupational Therapy Practices\n• Speech Therapy Centers\n• Multi-discipline Rehab Facilities\n• Home Health Agencies\n• PT/OT/ST Assistants\n\nWe scale from solo practitioners to large organizations!",
        "We serve rehabilitation professionals:\n\n• Physical Therapists & PTAs\n• Occupational Therapists & COTAs\n• Speech-Language Pathologists\n• Rehab clinic owners\n• Home health providers\n\nAny size practice, any setting!",
        "Our platform is designed for:\n\n• PT, OT, and ST professionals\n• Clinic owners and administrators\n• Therapy assistants\n• Multi-location practices\n• Home health agencies\n\nFlexible for any practice size.",
        "NeuroFysY works for:\n\n• Solo therapy practitioners\n• Small to mid-size clinics\n• Large rehabilitation centers\n• Hospital outpatient departments\n• Home health organizations\n\nBuilt for how therapists actually work.",
        "We support:\n\n• Individual therapists (PT, OT, SLP)\n• Group practices\n• Rehabilitation facilities\n• SNF therapy departments\n• Home health providers\n\nEvery discipline, every setting.",
        "Perfect for:\n\n• Physical therapy practices\n• Occupational therapy clinics\n• Speech therapy centers\n• Combined PT/OT/ST facilities\n• Mobile and home health\n\nFrom single providers to enterprise.",
        "Built specifically for:\n\n• Licensed therapists (PT, OT, SLP)\n• Therapy assistants (PTA, COTA)\n• Clinic managers and owners\n• Multi-site organizations\n• Contracted therapy providers",
        "Our users include:\n\n• Outpatient therapy clinics\n• Inpatient rehab facilities\n• Home health agencies\n• SNF therapy departments\n• Private practices\n\nAll rehabilitation settings!",
        "NeuroFysY serves:\n\n• Physical Therapists\n• Occupational Therapists\n• Speech-Language Pathologists\n• Assistants in all disciplines\n• Clinic administrators\n\nDesigned by therapists, for therapists.",
        "We cater to:\n\n• Every therapy discipline (PT/OT/ST)\n• Practices of all sizes\n• Various care settings\n• Individual and group practices\n• Enterprise organizations"
      ],
      options: [
        { label: "I'm a clinic owner", next: "clinic_owner" },
        { label: "I'm a therapist", next: "therapist" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    clinic_owner: {
      responses: [
        "As a clinic owner, NeuroFysY helps you:\n\n• Cut documentation time by 70%\n• Increase reimbursement rates\n• Track therapist productivity\n• Manage multiple locations\n• Stay audit-ready\n\nWant to see how it works for your clinic?",
        "For clinic owners, we offer:\n\n• Productivity dashboards\n• Revenue optimization tools\n• Multi-location management\n• Compliance monitoring\n• Staff performance tracking\n\nLet me show you the owner's view!",
        "Clinic owners love NeuroFysY because:\n\n• Documentation efficiency soars\n• Billing errors drop significantly\n• Staff productivity is visible\n• Compliance is built-in\n• Scaling becomes easier\n\nReady for a personalized demo?",
        "We help clinic owners:\n\n• Reduce administrative overhead\n• Maximize revenue capture\n• Monitor team performance\n• Ensure regulatory compliance\n• Grow their practice\n\nWant to explore the admin features?",
        "As an owner, you'll appreciate:\n\n• Real-time practice analytics\n• Reduced documentation burden\n• Better billing outcomes\n• Easy multi-site management\n• Compliance peace of mind\n\nShall I schedule a demo?",
        "NeuroFysY gives owners:\n\n• Visibility into operations\n• Tools to improve efficiency\n• Revenue cycle optimization\n• Compliance automation\n• Scalable infrastructure\n\nLet's discuss your specific needs!",
        "For practice owners:\n\n• 70% less time on paperwork\n• Improved claim acceptance\n• Staff productivity metrics\n• Centralized management\n• Audit-ready documentation\n\nInterested in seeing the numbers?",
        "Owners benefit from:\n\n• Operational efficiency gains\n• Better financial performance\n• Team accountability tools\n• Risk mitigation features\n• Growth-ready platform\n\nWant a customized walkthrough?",
        "Your practice will see:\n\n• Faster documentation turnaround\n• Higher reimbursement rates\n• Clear productivity data\n• Simplified compliance\n• Easier expansion\n\nLet's talk about your clinic!",
        "We empower clinic owners with:\n\n• Time-saving automation\n• Revenue maximization\n• Performance insights\n• Compliance assurance\n• Scalability options\n\nReady to transform your practice?"
      ],
      options: [
        { label: "Yes, schedule a demo", next: "demo" },
        { label: "Tell me about pricing", next: "pricing" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    therapist: {
      responses: [
        "As a therapist, NeuroFysY helps you:\n\n• Spend more time with patients\n• Document faster with AI\n• Access assessments instantly\n• Reduce after-hours paperwork\n• Focus on what matters - care!\n\nWant to see it in action?",
        "For therapists, we offer freedom from:\n\n• Late nights finishing notes\n• Repetitive documentation\n• Searching for assessment forms\n• Manual billing entries\n• Compliance worries\n\nReady to reclaim your time?",
        "Therapists choose NeuroFysY to:\n\n• Document during treatment\n• Use voice-to-text features\n• Access 90+ assessments\n• Submit notes instantly\n• Leave work at work!\n\nShall I show you how?",
        "We help therapists:\n\n• Cut documentation time dramatically\n• Stay present with patients\n• Access tools on any device\n• Streamline their workflow\n• Reduce burnout\n\nWant to see a demo?",
        "As a therapist, you'll love:\n\n• AI that understands clinical language\n• Notes finished before patients leave\n• Instant assessment access\n• Mobile-friendly platform\n• More family time!\n\nInterested in learning more?",
        "NeuroFysY gives therapists:\n\n• Documentation superpowers\n• Assessment libraries at fingertips\n• Seamless workflow\n• Work-life balance\n• Career satisfaction\n\nReady to see the difference?",
        "For clinical staff:\n\n• 2+ hours saved daily on notes\n• Real-time documentation\n• Easy assessment scoring\n• Compliant note templates\n• Flexible access anywhere\n\nWant to try it yourself?",
        "Therapists benefit from:\n\n• AI documentation assistance\n• Comprehensive assessment tools\n• Intuitive user interface\n• Time back in their day\n• Reduced stress\n\nLet me show you how it works!",
        "Your daily routine transforms:\n\n• Speak notes instead of typing\n• Pull up any assessment instantly\n• Finish documentation on time\n• Go home when work is done\n• Love your job again!\n\nInterested?",
        "We built this for therapists like you:\n\n• Smart documentation tools\n• Clinical decision support\n• Streamlined workflows\n• Mobile accessibility\n• Professional satisfaction\n\nWant to experience it?"
      ],
      options: [
        { label: "Yes, show me a demo", next: "demo" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    difference: {
      responses: [
        "What sets NeuroFysY apart:\n\n✓ Built BY therapists FOR therapists\n✓ AI that truly understands clinical language\n✓ Multi-discipline in one platform\n✓ No long-term contracts\n✓ Dedicated support team\n\nWe're not just another EMR!",
        "We're different because:\n\n✓ Therapy-specific from the ground up\n✓ AI trained on clinical documentation\n✓ PT, OT, ST in one system\n✓ Flexible pricing, no lock-ins\n✓ Real human support\n\nBuilt different, works better.",
        "NeuroFysY stands out:\n\n✓ Created by rehabilitation professionals\n✓ AI that speaks your language\n✓ All disciplines, one platform\n✓ Month-to-month flexibility\n✓ Support that actually helps\n\nThis isn't generic healthcare software.",
        "Why we're unique:\n\n✓ Therapy expertise built in\n✓ Intelligent clinical AI\n✓ Unified multi-discipline approach\n✓ No annual commitments required\n✓ Responsive support team\n\nMade specifically for you.",
        "Our differentiators:\n\n✓ Founded by therapists\n✓ AI designed for clinical notes\n✓ PT/OT/ST under one roof\n✓ Contract-free options\n✓ White-glove support\n\nNot your typical EMR vendor.",
        "We're not like the others:\n\n✓ Therapy-first design philosophy\n✓ Clinical AI that actually works\n✓ All rehab disciplines supported\n✓ Flexible terms\n✓ People who care about your success\n\nDifferent by design.",
        "What makes us special:\n\n✓ Therapist-built, therapist-approved\n✓ Industry-leading AI documentation\n✓ Comprehensive discipline coverage\n✓ No strings attached pricing\n✓ Outstanding customer care\n\nExperience the difference!",
        "NeuroFysY is different:\n\n✓ We understand therapy workflows\n✓ Our AI is clinically intelligent\n✓ One platform for PT, OT, ST\n✓ Leave whenever (but you won't)\n✓ Real support, real people\n\nBuilt right from the start.",
        "Our unique advantages:\n\n✓ Rehabilitation expertise\n✓ Purpose-built AI engine\n✓ Multi-specialty integration\n✓ Freedom to choose\n✓ Partnership approach\n\nNot just software - a solution.",
        "Why choose us:\n\n✓ We know therapy inside out\n✓ AI that's actually helpful\n✓ Every discipline welcome\n✓ Fair, flexible pricing\n✓ Support you can count on\n\nWe're in this together."
      ],
      options: [
        { label: "I'm convinced! Demo time", next: "demo" },
        { label: "What's the pricing?", next: "pricing" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    pricing: {
      responses: [
        "Our pricing is designed to be fair:\n\n• No setup fees\n• No long-term contracts\n• Per-provider pricing\n• Volume discounts available\n\nFor exact numbers tailored to your practice, let's schedule a quick call!",
        "We keep pricing simple:\n\n• Pay per provider\n• No hidden fees\n• Cancel anytime\n• Discounts for larger teams\n\nWant specific pricing for your situation?",
        "Here's our pricing philosophy:\n\n• Transparent per-user model\n• No upfront costs\n• Month-to-month available\n• Group rates for teams\n\nI'd recommend a call to discuss your specific needs.",
        "Pricing highlights:\n\n• Affordable per-provider rates\n• Zero setup or onboarding fees\n• Flexible commitments\n• Team discounts\n\nLet's discuss what works for your practice!",
        "Our approach to pricing:\n\n• Simple per-user basis\n• No surprise charges\n• No lock-in required\n• Better rates at scale\n\nWant to talk specifics?",
        "We believe in fair pricing:\n\n• Clear per-provider costs\n• Nothing hidden\n• Freedom to cancel\n• Volume incentives\n\nShall we discuss your practice size?",
        "Pricing overview:\n\n• Per-provider subscription\n• No implementation fees\n• Flexible terms\n• Multi-provider discounts\n\nLet's find the right fit for you!",
        "How we price:\n\n• Based on provider count\n• No costly setup\n• Month-to-month options\n• Savings for teams\n\nReady to get a custom quote?",
        "What to expect:\n\n• Straightforward per-user pricing\n• No hidden costs ever\n• Cancel flexibility\n• Team pricing available\n\nLet me connect you with our team!",
        "Pricing is simple with us:\n\n• Provider-based model\n• Free to start\n• No commitments required\n• Discounts for groups\n\nWant personalized pricing?"
      ],
      options: [
        { label: "Get a pricing call", next: "demo" },
        { label: "What's included?", next: "features" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    support: {
      responses: [
        "I'm here to help! What kind of support do you need?",
        "Sure, I can help with that! What's going on?",
        "Happy to assist! What issue are you experiencing?",
        "No problem! Tell me what you need help with.",
        "I've got you covered! What seems to be the issue?",
        "Let's get this sorted! What do you need?",
        "Of course! What can I help you troubleshoot?",
        "I'm ready to help! What's the problem?",
        "Support is what I'm here for! What's happening?",
        "Let me assist you! What's on your mind?"
      ],
      options: [
        { label: "Login issues", next: "login_help" },
        { label: "Documentation help", next: "doc_help" },
        { label: "Billing questions", next: "billing_help" },
        { label: "Talk to a human", next: "human_support" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    login_help: {
      responses: [
        "For login issues, try these steps:\n\n1. Clear your browser cache\n2. Try a different browser\n3. Reset your password\n4. Check Caps Lock\n\nStill stuck? Contact support@neurofysy.com",
        "Login troubles? Here's what to do:\n\n1. Clear browser data\n2. Use Chrome or Firefox\n3. Click 'Forgot Password'\n4. Verify Caps Lock is off\n\nNeed more help? Email support@neurofysy.com",
        "Let's fix that login:\n\n1. Clear cache and cookies\n2. Try another browser\n3. Reset your password\n4. Double-check Caps Lock\n\nIf problems persist: support@neurofysy.com",
        "Quick login fixes:\n\n1. Browser cache - clear it\n2. Different browser - try it\n3. Password reset - use it\n4. Caps Lock - check it\n\nStill issues? support@neurofysy.com",
        "Troubleshooting login:\n\n1. Clear browsing data\n2. Switch browsers\n3. Request password reset\n4. Ensure Caps Lock is off\n\nContact support@neurofysy.com if needed",
        "Login not working? Try:\n\n1. Clearing your cache\n2. A different browser\n3. Password reset link\n4. Checking Caps Lock\n\nReach out: support@neurofysy.com",
        "Here's how to fix login issues:\n\n1. Delete browser cache\n2. Open in new browser\n3. Use forgot password\n4. Watch Caps Lock\n\nEmail support@neurofysy.com for help",
        "Login troubleshooting:\n\n1. Cache clear\n2. Browser switch\n3. Password reset\n4. Caps Lock check\n\nSupport: support@neurofysy.com",
        "Can't log in? Steps to try:\n\n1. Clear your cache\n2. Different browser\n3. Reset password\n4. Check Caps Lock\n\nNeed help? support@neurofysy.com",
        "Fix login problems:\n\n1. Clear browser cache\n2. Try another browser\n3. Reset your password\n4. Verify Caps Lock\n\nEmail support@neurofysy.com if stuck"
      ],
      options: [
        { label: "That helped, thanks!", next: "resolved" },
        { label: "Still need help", next: "human_support" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    doc_help: {
      responses: [
        "For documentation help:\n\n• Check the Help Center (? icon)\n• Watch video tutorials\n• Use AI suggestions feature\n• Contact your clinic admin\n\nNeed specific guidance?",
        "Documentation assistance:\n\n• In-app Help Center has guides\n• Tutorial videos available\n• AI suggestions can help\n• Your admin can assist too\n\nWant more detailed help?",
        "Help with documentation:\n\n• Look for the ? icon for guides\n• We have video walkthroughs\n• Try the AI assist feature\n• Ask your clinic administrator\n\nNeed to speak to someone?",
        "Documentation resources:\n\n• Help Center in the app\n• Training videos online\n• AI-powered suggestions\n• Admin support at your clinic\n\nNeed personal assistance?",
        "For doc questions:\n\n• Use in-app help (?)\n• Watch our tutorials\n• Enable AI suggestions\n• Check with your admin\n\nWant direct support?",
        "Documentation support:\n\n• ? icon has help articles\n• Video guides available\n• AI can suggest content\n• Your admin knows the system\n\nNeed more help?",
        "Need doc help:\n\n• In-app Help Center\n• Tutorial library\n• AI writing assistance\n• Clinic admin support\n\nWant to talk to someone?",
        "Documentation tips:\n\n• Use the Help Center\n• Check tutorial videos\n• Leverage AI suggestions\n• Ask your administrator\n\nNeed human help?",
        "For documentation:\n\n• Help articles in-app\n• Video tutorials exist\n• AI suggestions available\n• Admin can guide you\n\nWant direct support?",
        "Doc assistance:\n\n• ? for Help Center\n• Videos for learning\n• AI for suggestions\n• Admin for questions\n\nNeed to escalate?"
      ],
      options: [
        { label: "Talk to support", next: "human_support" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    billing_help: {
      responses: [
        "For billing questions:\n\n• Claims: billing@neurofysy.com\n• Denied claims assistance\n• Payment posting help\n• Insurance verification\n\nOur billing team responds within hours!",
        "Billing support available:\n\n• Email: billing@neurofysy.com\n• Help with denied claims\n• Payment questions\n• Verification assistance\n\nFast response guaranteed!",
        "Billing inquiries:\n\n• Contact: billing@neurofysy.com\n• Claim submission issues\n• Denial management\n• Payment questions\n\nWe respond quickly!",
        "For billing help:\n\n• Reach out: billing@neurofysy.com\n• Claims assistance\n• Denial resolution\n• Payment support\n\nTypically respond within hours.",
        "Billing questions? Contact:\n\nbilling@neurofysy.com\n\n• Claim help\n• Denial support\n• Payment inquiries\n• Insurance verification\n\nQuick responses!",
        "Our billing team helps with:\n\n• Claims issues\n• Denials\n• Payments\n• Verification\n\nEmail: billing@neurofysy.com",
        "Billing support:\n\nEmail billing@neurofysy.com for:\n• Claims questions\n• Denial appeals\n• Payment posting\n• Insurance checks\n\nFast turnaround!",
        "For billing matters:\n\n• billing@neurofysy.com\n• Claim assistance\n• Denial management\n• Payment help\n\nWe're quick to respond!",
        "Billing team ready to help:\n\nbilling@neurofysy.com\n\nThey handle:\n• Claims\n• Denials\n• Payments\n• Verifications",
        "Get billing help:\n\n• Email billing@neurofysy.com\n• For all claim issues\n• Denial assistance\n• Payment questions\n\nResponse within hours!"
      ],
      options: [
        { label: "Thanks for the info!", next: "resolved" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    human_support: {
      responses: [
        "I'll connect you with our team!\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Live Chat: M-F, 8am-6pm EST\n\nAverage response: under 2 hours!",
        "Here's how to reach us:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Live Chat available weekdays\n\nWe typically respond within 2 hours!",
        "Connect with our humans:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Chat: Mon-Fri, 8am-6pm EST\n\nUsually respond in under 2 hours!",
        "Our support team awaits:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Live Chat weekdays\n\nExpect a response within 2 hours!",
        "Real humans ready to help:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Chat: M-F, 8-6 EST\n\nResponse time: ~2 hours",
        "Contact our support team:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Weekday chat available\n\nWe respond fast - usually under 2 hours!",
        "Reach our team:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Live Chat: Mon-Fri\n\nTypically under 2 hour response!",
        "Our humans are standing by:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Chat hours: 8am-6pm EST\n\nQuick responses guaranteed!",
        "Get human help:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Chat available M-F\n\nUsually respond in under 2 hours!",
        "Support team contact:\n\n📧 support@neurofysy.com\n📞 1-800-NEUROFYS\n💬 Live Chat weekdays 8-6 EST\n\nAverage response: 2 hours!"
      ],
      options: [
        { label: "Thanks Veronica!", next: "goodbye" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    demo: {
      responses: [
        "Great choice! To schedule your demo:\n\n📅 Click 'Request Demo' on our site\n📧 Email: sales@neurofysy.com\n📞 Call: 1-800-NEUROFYS\n\nWe usually respond within 1 hour!",
        "Let's get you set up with a demo!\n\n📅 Use the 'Request Demo' button\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nExpect to hear back within an hour!",
        "Excellent! Here's how to book:\n\n📅 'Request Demo' on our website\n📧 Email sales@neurofysy.com\n📞 Phone: 1-800-NEUROFYS\n\nTypically respond in 1 hour!",
        "Perfect! Schedule your demo:\n\n📅 Website 'Request Demo' button\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nWe'll reach out quickly!",
        "Awesome! Book your demo:\n\n📅 Click 'Request Demo'\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nResponse within 1 business hour!",
        "Love it! Get your demo scheduled:\n\n📅 'Request Demo' on site\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nWe respond fast!",
        "You'll love what you see! Book:\n\n📅 Request Demo button\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nUsually respond within the hour!",
        "Let's show you what we've got:\n\n📅 'Request Demo' on website\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nQuick response guaranteed!",
        "Can't wait to show you!\n\n📅 Request Demo link\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nExpect contact within 1 hour!",
        "Great decision! Demo options:\n\n📅 Use Request Demo\n📧 sales@neurofysy.com\n📞 1-800-NEUROFYS\n\nWe respond in about an hour!"
      ],
      options: [
        { label: "Go to demo page", next: "demo_redirect" },
        { label: "Thanks, I'll reach out!", next: "goodbye" },
        { label: "← Back to menu", next: "initial" }
      ]
    },
    demo_redirect: {
      responses: [
        "Taking you to our demo page now...",
        "Redirecting you to schedule...",
        "Let me take you there...",
        "Opening the demo page...",
        "Redirecting now...",
        "Taking you to the form...",
        "Let's get you there...",
        "Heading to demo scheduling...",
        "Opening demo request...",
        "On our way to the demo page..."
      ],
      action: "redirect_demo",
      options: [
        { label: "← Back to menu", next: "initial" }
      ]
    },
    resolved: {
      responses: [
        "Glad I could help! Anything else you'd like to know?",
        "Happy to help! Is there anything else?",
        "Great! Let me know if you need anything else!",
        "Awesome! Any other questions?",
        "Perfect! Anything else I can assist with?",
        "Wonderful! Need help with anything else?",
        "Excellent! Is there more I can help with?",
        "I'm glad! What else can I do for you?",
        "Great to hear! Any other questions?",
        "Happy I could assist! Anything else?"
      ],
      options: [
        { label: "Yes, another question", next: "initial" },
        { label: "No, thanks Veronica!", next: "goodbye" }
      ]
    },
    goodbye: {
      responses: [
        "Thank you for chatting! Feel free to come back anytime. Have a great day! 👋",
        "Thanks for stopping by! Don't hesitate to return if you have questions. Take care! 👋",
        "It was great chatting! Come back whenever you need help. Have a wonderful day! 👋",
        "Thank you! I'm here whenever you need me. Enjoy your day! 👋",
        "Thanks for talking with me! Feel free to reach out again. Bye for now! 👋",
        "Glad we could chat! Return anytime you have questions. Have a great one! 👋",
        "Thanks for visiting! I'll be here if you need anything. Take care! 👋",
        "It was nice helping you! Come back anytime. Have a fantastic day! 👋",
        "Thank you! Don't be a stranger - I'm always here. Goodbye! 👋",
        "Thanks for chatting! Wishing you all the best. See you next time! 👋"
      ],
      options: [
        { label: "Start new conversation", next: "initial" }
      ]
    }
  }), []);

  // Show widget after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Start conversation when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen]);

  const startConversation = () => {
    setIsTyping(true);
    setTimeout(() => {
      const initialNode = conversationFlow.initial;
      const randomResponse = getRandomResponse(initialNode.responses);
      setMessages([{ type: 'bot', text: randomResponse }]);
      setCurrentOptions(initialNode.options);
      setIsTyping(false);
    }, 2000);
  };

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { type: 'user', text: option.label }]);
    setCurrentOptions([]);
    setIsTyping(true);

    if (option.next === 'demo_redirect') {
      setTimeout(() => {
        window.location.href = '/contact';
      }, 2500);
    }

    // 2 second delay for typing effect
    setTimeout(() => {
      const nextNode = conversationFlow[option.next];
      if (nextNode) {
        const randomResponse = getRandomResponse(nextNode.responses);
        setMessages(prev => [...prev, { type: 'bot', text: randomResponse }]);
        setCurrentOptions(nextNode.options);
      }
      setIsTyping(false);
    }, 2000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentOptions([]);
    startConversation();
  };

  if (!isVisible) return null;

  return (
    <div className="veronica-container">
      {/* Chat Window */}
      <div className={`veronica-chat ${isOpen ? 'open' : ''}`}>
        <div className="veronica-header">
          <div className="veronica-header__info">
            <div className="veronica-avatar">
              <span>V</span>
            </div>
            <div className="veronica-header__text">
              <span className="veronica-name">Veronica</span>
              <span className="veronica-status">
                <span className="status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <div className="veronica-header__actions">
            <button className="reset-btn" onClick={resetChat} title="Restart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </svg>
            </button>
            <button className="close-btn" onClick={closeChat}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="veronica-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.type === 'bot' && (
                <div className="message-avatar">
                  <span>V</span>
                </div>
              )}
              <div className="message-content">
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">
                <span>V</span>
              </div>
              <div className="message-content typing">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {currentOptions.length > 0 && !isTyping && (
          <div className="veronica-options">
            {currentOptions.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Floating Button */}
      <button
        className={`veronica-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Chat with Veronica"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="chat-icon">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span className="toggle-badge">1</span>
          </>
        )}
      </button>

      {/* Hint popup */}
      {!isOpen && (
        <div className="veronica-hint">
          <span>Hi! I'm Veronica 💬</span>
          <button className="hint-close" onClick={() => setIsVisible(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Veronica;
