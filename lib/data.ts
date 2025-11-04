import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'naman.mah458@gmail.com',

    emailSubject: "Let's collaborate on something cool!",
    emailBody: 'Hey Naman, just checked out your portfolio — wanted to reach out because...',

    oldPortfolio: '',
    upworkProfile: '',
    linkedinProfile: 'https://www.linkedin.com/in/naman458',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/naman458' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/naman458' },
    { name: 'instagram', url: 'https://instagram.com/naman_458' }, // optional
];

export const MY_STACK = {
    ai_ml: [
        { name: 'Python', icon: '/logo/python.png' },
        { name: 'scikit-learn', icon: '/logo/scikit-learn.png' },
        { name: 'Pandas', icon: '/logo/Pandas.png' },
        { name: 'NumPy', icon: '/logo/NumPy.png' },
        { name: 'Matplotlib', icon: '/logo/Matplotlib.png' },
    ],

    data_analytics: [
        { name: 'Streamlit', icon: '/logo/Streamlit.png' },
        { name: 'Power BI', icon: '/logo/PowerBI.png' }, 
        { name: 'Excel', icon: '/logo/Excel.png' }, 
        { name: 'Postman', icon: '/logo/Postman.png' },
        { name: 'Canva', icon: '/logo/Canva.png' },
    ],

    database: [
        { name: 'MySQL', icon: '/logo/MySQL.png' },
        { name: 'PostgreSQL', icon: '/logo/PostgresSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.png' },
    ],

    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'VS Code', icon: '/logo/Visual Studio Code (VS Code).png' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'C++', icon: '/logo/C++ (CPlusPlus).png' },
        { name: 'Java', icon: '/logo/Java.png' },
        { name: 'Linux', icon: '/logo/Linux.png' },
        { name: 'Slack', icon: '/logo/Slack.png' },
    ],
};


export const PROJECTS: IProject[] = [
    {
        title: 'Trade Reconciliation System',
        slug: 'trade-reconciliation',
        year: 2024,
        thumbnail: '/projects/thumbnail/trade.png', // ⬅️ upload to /public/projects/thumbnail/
        longThumbnail: '/projects/long/trade.png', // ⬅️ upload to /public/projects/long/
        images: [
            '/projects/images/trade-1.png',
            '/projects/images/trade-2.png',
        ], // optional
        techStack: ['Python', 'Streamlit', 'SQL', 'Pandas'],
        description: `
        A full-fledged trade reconciliation system that syncs and validates financial transactions across multiple ledgers in real time. Built for audit accuracy and zero mismatch tolerance. <br/><br/>
        <ul>
          <li>🧾 Automated mismatch detection for daily trades</li>
          <li>📊 Live dashboards with Streamlit</li>
          <li>💾 SQL-based data integrity checks</li>
          <li>⚡ Cut reconciliation time by 70%</li>
        </ul>`,
        role: `
        End-to-end developer. Designed database schema, built Python logic for reconciliation, and created live monitoring dashboards.`,
    },
    {
        title: 'RBI Notifications AI',
        slug: 'rbi-ai',
        year: 2024,
        thumbnail: '/projects/thumbnail/rbi.png',
        longThumbnail: '/projects/long/rbi.png',
        images: ['/projects/images/rbi-1.png'],
        techStack: ['LangChain', 'OpenAI API', 'Flask', 'Next.js'],
        description: `
        A smart notification system that reads new RBI circulars and instantly summarizes them using AI — no more PDF headaches. <br/><br/>
        <ul>
          <li>🤖 GPT-powered summarizer with custom prompt tuning</li>
          <li>📂 Organized past notifications via semantic search</li>
          <li>⚙️ Integrated front-end dashboard with Flask + Next.js</li>
        </ul>`,
        role: `
        Created AI backend, built embedding logic for search, and deployed Flask API. Also crafted the frontend for instant summaries.`,
    },
    {
        title: 'Customer Churn Estimator',
        slug: 'churn-estimator',
        year: 2024,
        thumbnail: '/projects/thumbnail/churn.png',
        longThumbnail: '/projects/long/churn.png',
        images: ['/projects/images/churn-1.png'],
        techStack: ['Python', 'Scikit-learn', 'PowerBI'],
        description: `
        Machine learning project predicting which customers are likely to churn based on behavioral and transaction data. <br/><br/>
        <ul>
          <li>📈 Trained classification models on customer retention data</li>
          <li>🧠 Used Random Forest for top accuracy</li>
          <li>📊 Interactive dashboard with churn insights</li>
        </ul>`,
        role: `
        Built and trained ML model, deployed as API, and visualized key churn metrics in PowerBI.`,
    },
    {
        title: 'Wind Tunnel Data Visualizer',
        slug: 'wind-tunnel',
        year: 2023,
        thumbnail: '/projects/thumbnail/wind.png',
        longThumbnail: '/projects/long/wind.png',
        images: ['/projects/images/wind-1.png'],
        techStack: ['AutoCAD', 'Creativity'],
        description: `
        Constructed a Wind Tunnel to examine Aerodynamics. <br/><br/>
        <ul>
          <li>🌪️ Real-time airflow simulations</li>
          <li>📊 Velocity visualizations</li>
          <li>⚙️ Wind Speed Monitoring</li>
        </ul>`,
        role: `
        `,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
