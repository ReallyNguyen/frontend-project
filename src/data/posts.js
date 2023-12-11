export const initialState = {
    posts: [
        {
            id: 1,
            title: "BCIT Chronicles: A Day in the Life",
            postContent: "Calling all BCIT students! Let's give prospective and current students a glimpse into our daily lives on campus. Share a photo or a description of your typical day – from morning coffee rituals to favorite study spots. It's a chance to showcase the diverse experiences within the BCIT community. Can't wait to see your snapshots!",
            number: 12,
            comments: [
                { id: 1, user: "Jordan123", text: "yayyy!" },
                { id: 2, user: "BBBcit", text: "Love it" },
                { id: 3, user: "D3 Dudes", text: "Nice one" },
            ],
            postCategory: "Campus",
            own: false, // post that created by user
            like: true, // post that liked by user
            days: 3,
            link: "https://images.unsplash.com/photo-1575435349939-0ffbdad70905?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Hidden Gems at BCIT Campus",
            postContent: "Hey fellow BCIT students! Let's uncover the lesser-known treasures around our campus. Share your favorite study spots, hidden cafeterias, or any unique features of BCIT that not everyone might be aware of. Let's make navigating our campus a little more exciting! – from morning coffee rituals to favorite study spots. It's a chance to showcase the diverse experiences within the BCIT community. Can't wait to see your snapshots!",
            number: 32,
            comments: [
            ],
            postCategory: "Student Life",
            own: true, // post that created by user
            like: false, // post that liked by user
            days: 5,
            link: "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "BCIT Campus Upgrades – What Would You Like to See?",
            postContent: "Hey BCIT community! Rumor has it that there are potential campus upgrades in the pipeline. What facilities or changes would you love to see on campus? Whether it's more green spaces, tech upgrades, or new study areas, share your wishlist and let's dream up the future of our beloved BCIT campus!",
            number: 28,
            comments: [
            ],
            postCategory: "Study Group",
            own: false, // post that created by user
            like: true, // post that liked by user
            days: 4,
            link: "https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            title: "Exciting Events This Month at BCIT",
            postContent: "Attention BCIT community! Check out the lineup of events happening this month on campus. From workshops to guest lectures, there's something for everyone. Share your thoughts on the events you're most excited about or suggest additional activities that you'd like to see!",
            number: 45,
            comments: [
                { id: 1, user: "Student98", text: "Sounds amazing!" },
                { id: 2, user: "EventEnthusiast", text: "Can't wait to attend!" },
            ],
            postCategory: "Events",
            own: false,
            like: true,
            days: 2,
            link: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            title: "Tips for a Successful Study Group",
            postContent: "Hey BCIT students! Let's share tips and strategies for effective study groups. Whether it's finding the perfect study spot or utilizing online tools, share your experiences and advice. Forming study groups can enhance our learning experience – let's help each other succeed!",
            number: 15,
            comments: [
                { id: 1, user: "StudyBuddy22", text: "Great idea! Communication is key." },
                { id: 2, user: "FocusedMind", text: "I recommend using collaborative tools like Google Docs." },
            ],
            postCategory: "Study Group",
            own: true,
            like: false,
            days: 7,
            link: "https://images.unsplash.com/photo-1603573355706-3f15d98cf100?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            title: "Alumni Spotlight: Success Stories",
            postContent: "Calling all BCIT alumni! Let's celebrate the achievements of our graduates. Share your success story or nominate an outstanding alum whose accomplishments inspire you. This is a chance to showcase the diverse and impactful journeys of BCIT graduates.",
            number: 72,
            comments: [
                { id: 1, user: "ProudAlum", text: "So proud to be part of the BCIT community!" },
                { id: 2, user: "FutureGrad", text: "Inspiring stories. Can't wait to join the alumni network!" },
            ],
            postCategory: "Alumni",
            own: false,
            like: true,
            days: 5,
            link: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 7,
            title: "Best Cafeterias Near BCIT",
            postContent: "Let's compile a list of the best cafeterias and eateries near BCIT. Share your favorite spots for a quick bite or a relaxing meal. Whether it's hidden gems or popular hangouts, your recommendations can make a difference for fellow students!",
            number: 40,
            comments: [
                { id: 1, user: "FoodExplorer", text: "I found a cozy spot with amazing sandwiches!" },
                { id: 2, user: "CaffeineAddict", text: "Don't miss the coffee shop across the street!" },
            ],
            postCategory: "Student Life",
            own: false,
            like: true,
            days: 6,
            link: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            title: "Tech Innovations in BCIT Programs",
            postContent: "BCIT is known for staying ahead in technology education. Share your thoughts on the latest tech innovations happening within our programs. Whether it's new courses, projects, or collaborations, let's discuss how BCIT is shaping the future of tech education!",
            number: 65,
            comments: [
                { id: 1, user: "TechEnthusiast", text: "Impressive advancements in the computer science program!" },
                { id: 2, user: "FutureCoder", text: "Excited to join BCIT and be part of this innovation!" },
            ],
            postCategory: "Program",
            own: false,
            like: false,
            days: 3,
            link: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 9,
            title: "Career Advice from BCIT Graduates",
            postContent: "Calling all BCIT alumni! Share your career advice and insights with current students. Whether it's navigating job searches, building a portfolio, or excelling in interviews, your experience can guide and inspire the next generation of professionals.",
            number: 22,
            comments: [
                { id: 1, user: "CareerGuru", text: "Networking is key to a successful career!" },
                { id: 2, user: "AmbitiousGrad", text: "Any tips for breaking into the tech industry?" },
            ],
            postCategory: "Career",
            own: false,
            like: true,
            days: 8,
            link: "https://images.unsplash.com/photo-1572566201797-81b5e325dd6c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 10,
            title: "Memorable Housing Experiences at BCIT",
            postContent: "Share your housing experiences while studying at BCIT. Whether you lived on campus, found great roommates, or have tips for finding affordable housing, your insights can help current and future students navigate their housing options.",
            number: 18,
            comments: [
                { id: 1, user: "HousingExplorer", text: "Found a cozy apartment close to campus!" },
                { id: 2, user: "RoommateStories", text: "Living with roommates has been a great experience!" },
            ],
            postCategory: "Housing",
            own: false,
            like: false,
            days: 5,
            link: "https://images.unsplash.com/photo-1649077991904-14a698bd68c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 11,
            title: "BCIT Community Art Showcase",
            postContent: "Calling all BCIT artists! Share your artwork or creative projects with the community. Whether it's paintings, digital art, or sculptures, let's celebrate the artistic talents within BCIT. Share your masterpieces and inspire others to explore their creativity!",
            number: 55,
            comments: [
                { id: 1, user: "ArtLover", text: "Incredible talent in our BCIT community!" },
                { id: 2, user: "CreativeMind", text: "I'm inspired to start my own art project now!" },
            ],
            postCategory: "Events",
            own: true,
            like: false,
            days: 6,
            link: "https://images.unsplash.com/photo-1657299156653-d3c0147ba3ee?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 12,
            title: "Tips for Effective Time Management",
            postContent: "Balancing coursework and personal life can be challenging. Share your tips for effective time management at BCIT. Whether it's using productivity apps, setting realistic goals, or creating a study schedule, your strategies can help others succeed!",
            number: 30,
            comments: [
                { id: 1, user: "TimeMaster", text: "Prioritizing tasks has been a game-changer for me!" },
                { id: 2, user: "StudySmart", text: "Any recommendations for staying focused during exams?" },
            ],
            postCategory: "Student Life",
            own: false,
            like: true,
            days: 4,
            link: "https://images.unsplash.com/photo-1657299143333-4a56a5519651?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 13,
            title: "BCIT Coding Challenge: Show Your Skills!",
            postContent: "Calling all coding enthusiasts! Let's have a friendly coding challenge within the BCIT community. Share your coding solutions, challenges, or tips for fellow programmers. It's a great way to learn, collaborate, and showcase your coding skills!",
            number: 42,
            comments: [
                { id: 1, user: "CodeNinja", text: "Excited for the coding challenge! Count me in!" },
                { id: 2, user: "AlgorithmMaster", text: "I love challenges that push my coding skills!" },
            ],
            postCategory: "Program",
            own: false,
            like: true,
            days: 2,
            link: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 14,
            title: "BCIT Alumni Networking Event",
            postContent: "Attention BCIT alumni! Join us for an upcoming networking event. Connect with fellow graduates, share your career experiences, and expand your professional network. It's a great opportunity to reconnect with old friends and make new connections!",
            number: 68,
            comments: [
                { id: 1, user: "NetworkingPro", text: "Networking events like these have been crucial for my career!" },
                { id: 2, user: "AlumniConnections", text: "Looking forward to meeting fellow alumni!" },
            ],
            postCategory: "Alumni",
            own: false,
            like: false,
            days: 7,
            link: "https://images.unsplash.com/photo-1681332192887-1b769feea59a?q=80&w=2966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 15,
            title: "BCIT Outdoor Study Spaces",
            postContent: "Explore the outdoor study spaces around BCIT! Share your favorite spots for studying outdoors, whether it's a quiet garden or a scenic bench. Let's make the most of our beautiful campus and find new, refreshing places to focus on our studies.",
            number: 20,
            comments: [
                { id: 1, user: "NatureStudy", text: "Studying outdoors is so rejuvenating!" },
                { id: 2, user: "FreshAirCoder", text: "I found a perfect spot with a view of the mountains!" },
            ],
            postCategory: "Campus",
            own: false,
            like: true,
            days: 5,
            link: "https://images.unsplash.com/photo-1699987322888-866a741458da?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 16,
            title: "BCIT Virtual Reality Projects",
            postContent: "Discover the latest virtual reality projects at BCIT. Whether it's simulations, games, or educational experiences, share your VR projects and experiences. Let's explore the innovative ways BCIT students are incorporating virtual reality into their studies!",
            number: 50,
            comments: [
                { id: 1, user: "VRExplorer", text: "Virtual reality is transforming education! Amazing projects!" },
                { id: 2, user: "TechInnovation", text: "I'm curious to try out some VR projects. Any recommendations?" },
            ],
            postCategory: "Program",
            own: false,
            like: false,
            days: 8,
            link: "https://images.unsplash.com/photo-1701449098364-b5c6cc3e768c?q=80&w=2975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 17,
            title: "BCIT Volunteer Opportunities",
            postContent: "Interested in giving back to the community? Explore volunteer opportunities at BCIT and beyond. Share your experiences with volunteer work, suggest meaningful projects, or connect with others who are passionate about making a positive impact!",
            number: 12,
            comments: [
                { id: 1, user: "VolunteerSpirit", text: "Volunteering has been a rewarding experience for me!" },
                { id: 2, user: "CommunityBuilder", text: "Let's collaborate on a volunteer project together!" },
            ],
            postCategory: "Events",
            own: false,
            like: true,
            days: 3,
            link: "https://images.unsplash.com/photo-1678067573245-61d258c7bba8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 18,
            title: "BCIT Book Club: Reading Recommendations",
            postContent: "Join the BCIT Book Club! Share your favorite books, recommend must-reads, or propose books for the upcoming months. Whether it's fiction, non-fiction, or academic reads, let's foster a love for reading within the BCIT community.",
            number: 35,
            comments: [
                { id: 1, user: "BookWorm", text: "I'm excited to join the book club! Any genre preferences?" },
                { id: 2, user: "LiteraryExplorer", text: "Looking forward to discovering new books with the BCIT community!" },
            ],
            postCategory: "Student Life",
            own: true,
            like: true,
            days: 6,
            link: "https://images.unsplash.com/photo-1681716455523-f6c10c3c17d3?q=80&w=2975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 19,
            title: "BCIT Fitness Challenge",
            postContent: "Embark on a fitness journey with the BCIT Fitness Challenge. Share your workout routines, progress updates, or fitness tips. Whether you're into running, yoga, or weightlifting, let's motivate each other to stay active and healthy!",
            number: 80,
            comments: [
                { id: 1, user: "FitAndHealthy", text: "Excited for the fitness challenge! Let's support each other!" },
                { id: 2, user: "HealthyLifestyle", text: "Looking for workout buddies. Who's in?" },
            ],
            postCategory: "Student Life",
            own: false,
            like: true,
            days: 9,
            link: "https://images.unsplash.com/photo-1701369290924-475bd6169621?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 20,
            title: "BCIT Podcast Recommendations",
            postContent: "Discover interesting podcasts at BCIT! Share your favorite podcasts, recommend educational series, or suggest entertaining shows. Whether it's technology, business, or storytelling, let's create a list of must-listen podcasts within the BCIT community.",
            number: 25,
            comments: [
                { id: 1, user: "PodcastLover", text: "Podcasts are a great way to learn on the go! Thanks for the recommendations." },
                { id: 2, user: "TechTalks", text: "Any tech-related podcasts you'd recommend?" },
            ],
            postCategory: "Student Life",
            own: true,
            like: true,
            days: 4,
            link: "https://images.unsplash.com/photo-1701743805124-dde90e4df301?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 21,
            title: "BCIT Language Exchange Program",
            postContent: "Interested in learning a new language? Join the BCIT Language Exchange Program! Share your language learning goals, find language exchange partners, or organize language practice sessions. Let's embrace linguistic diversity within our BCIT community.",
            number: 15,
            comments: [
                { id: 1, user: "Polyglot", text: "Excited to connect with language enthusiasts! Which languages are you interested in learning?" },
                { id: 2, user: "LanguageExplorer", text: "Great initiative! I'm looking for a language exchange partner." },
            ],
            postCategory: "Student Life",
            own: false,
            like: false,
            days: 6,
            link: "https://images.unsplash.com/photo-1702182910051-2481e0a486fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 22,
            title: "BCIT Sustainability Challenge",
            postContent: "Join the BCIT Sustainability Challenge! Share eco-friendly tips, sustainable practices, or green initiatives happening at BCIT. Whether it's reducing waste, conserving energy, or promoting sustainability, let's work together for a greener campus!",
            number: 40,
            comments: [
                { id: 1, user: "EcoWarrior", text: "Excited to participate in the Sustainability Challenge! Let's make a positive impact together." },
                { id: 2, user: "GreenLiving", text: "Any tips for sustainable living on and off-campus?" },
            ],
            postCategory: "Events",
            own: false,
            like: true,
            days: 7,
            link: "https://images.unsplash.com/photo-1701921188889-06d89afcbb5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 23,
            title: "BCIT Diversity and Inclusion Forum",
            postContent: "Engage in discussions about diversity and inclusion at BCIT. Share your experiences, perspectives, and suggestions for creating an inclusive campus environment. Let's celebrate diversity and work towards a more inclusive BCIT community.",
            number: 28,
            comments: [
                { id: 1, user: "InclusionAdvocate", text: "Important conversations! Let's learn from each other and foster a welcoming community." },
                { id: 2, user: "DiversityChampion", text: "I appreciate the initiative! How can we actively contribute to promoting inclusion?" },
            ],
            postCategory: "Campus",
            own: true,
            like: false,
            days: 5,
            link: "https://images.unsplash.com/photo-1701209770647-b7e4e25112ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 24,
            title: "BCIT Photography Contest",
            postContent: "Calling all BCIT photographers! Participate in the campus photography contest. Share your best shots, whether it's landscapes, architecture, or candid moments. Let's showcase the beauty of our BCIT campus through your lens!",
            number: 50,
            comments: [
                { id: 1, user: "PhotoEnthusiast", text: "Excited for the photography contest! Can't wait to see the stunning submissions." },
                { id: 2, user: "CapturedMoments", text: "Photography is a powerful way to tell stories. Count me in!" },
            ],
            postCategory: "Events",
            own: false,
            like: true,
            days: 9,
            link: "https://images.unsplash.com/photo-1701893852514-e079530f6bb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 25,
            title: "BCIT Mental Health Awareness",
            postContent: "Start a conversation about mental health at BCIT. Share resources, coping strategies, or personal stories to raise awareness and support one another. Let's foster a community that prioritizes mental health and well-being.",
            number: 18,
            comments: [
                { id: 1, user: "MindfulBCIT", text: "Mental health is crucial. Thank you for initiating this conversation." },
                { id: 2, user: "SupportiveCommunity", text: "Let's create a safe space for discussing mental health. How can we support each other?" },
            ],
            postCategory: "Student Life",
            own: false,
            like: false,
            days: 6,
            link: "https://images.unsplash.com/photo-1701799460352-b5c59d5d622e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 26,
            title: "BCIT Remote Learning Tips",
            postContent: "Share your tips for successful remote learning at BCIT. Whether it's creating a dedicated study space, managing time effectively, or staying motivated, your insights can help fellow students navigate the challenges of online education.",
            number: 32,
            comments: [
                { id: 1, user: "RemoteLearner", text: "Remote learning has its challenges. Looking forward to learning from everyone's experiences!" },
                { id: 2, user: "OnlineStudyBuddy", text: "Any tips for staying focused during virtual lectures?" },
            ],
            postCategory: "Student Life",
            own: false,
            like: true,
            days: 4,
            link: "https://images.unsplash.com/photo-1701696602374-7cb01810a90f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTh8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 27,
            title: "BCIT Robotics Club: Join the Community",
            postContent: "Calling all robotics enthusiasts! Connect with fellow students interested in robotics. Share your projects, discuss the latest advancements, or find collaborators for future robotics endeavors. Let's build a strong community of roboticists at BCIT!",
            number: 22,
            comments: [
                { id: 1, user: "RoboticsFanatic", text: "Exciting! I'm eager to connect with other robotics enthusiasts." },
                { id: 2, user: "TechInnovator", text: "Count me in. Let's create some amazing robotics projects together!" },
            ],
            postCategory: "Program",
            own: true,
            like: true,
            days: 5,
            link: "https://images.unsplash.com/photo-1701860943611-9f7cd8b13ebc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 28,
            title: "BCIT Coding Bootcamp Alumni Success Stories",
            postContent: "Are you a graduate of the BCIT Coding Bootcamp? Share your success story and insights into the world of coding. Whether you've landed a dream job, started your own project, or have valuable advice to offer, let's inspire aspiring coders in the BCIT community!",
            number: 55,
            comments: [
                { id: 1, user: "CodeSuccess", text: "Inspiring stories! Can't wait to join the coding bootcamp." },
                { id: 2, user: "FutureCoder", text: "Congratulations to all the successful bootcamp graduates! Any tips for someone starting the journey?" },
            ],
            postCategory: "Career",
            own: false,
            like: true,
            days: 8,
            link: "https://images.unsplash.com/photo-1701433507837-563082c84e7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 29,
            title: "BCIT DIY Workshop: Craft and Create",
            postContent: "Host a DIY workshop at BCIT! Share your crafting skills, host virtual sessions, or suggest creative projects for the community. Let's come together to explore different crafts and unleash our creativity. What DIY projects are you excited to try?",
            number: 25,
            comments: [
                { id: 1, user: "CraftyCreator", text: "I'm excited for the DIY workshop! What kind of crafts are everyone interested in?" },
                { id: 2, user: "HandmadeArt", text: "Looking forward to learning new crafting techniques! Count me in." },
            ],
            postCategory: "Events",
            own: false,
            like: false,
            days: 6,
            link: "https://images.unsplash.com/photo-1687235446378-cd998fdd1278?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDd8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 31,
            title: "BCIT Gaming Club: Let's Play Together",
            postContent: "Join the BCIT Gaming Club! Share your favorite games, organize gaming sessions, or discuss the latest releases. Whether you're into PC, console, or mobile gaming, let's connect and have fun gaming together!",
            number: 40,
            comments: [
                { id: 1, user: "GamingEnthusiast", text: "Excited to join the gaming club! What games are you all currently playing?" },
                { id: 2, user: "MultiplayerFanatic", text: "Looking for gaming buddies! Let's create an epic gaming community at BCIT." },
            ],
            postCategory: "Student Life",
            own: true,
            like: true,
            days: 5,
            link: "https://images.unsplash.com/photo-1701651541625-e8fa78fa741d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNDV8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 30,
            title: "BCIT Music Lovers: Share Your Playlist",
            postContent: "Are you passionate about music? Share your favorite playlists, recommend new tracks, or discuss music genres. Let's create a diverse musical community at BCIT and discover the soundtracks that inspire us!",
            number: 18,
            comments: [
                { id: 1, user: "MusicExplorer", text: "Music is my escape! Excited to discover new playlists from the BCIT community." },
                { id: 2, user: "PlaylistCreator", text: "Any recommendations for study playlists? Let's share our favorite tunes." },
            ],
            postCategory: "Student Life",
            own: false,
            like: false,
            days: 7,
            link: "https://images.unsplash.com/photo-1701453031893-7ba3879de2c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNTB8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 31,
            title: "BCIT Fitness Challenge: Week 2 Updates",
            postContent: "How's everyone doing in the BCIT Fitness Challenge? Share your progress, achievements, or challenges you've faced. Let's motivate and support each other on our fitness journeys. Remember, every step counts!",
            number: 60,
            comments: [
                { id: 1, user: "FitnessUpdate", text: "Completed my fitness goals for the week! Let's keep pushing each other." },
                { id: 2, user: "WellnessJourney", text: "Struggling a bit, but determined to stay on track. Any tips for staying motivated?" },
            ],
            postCategory: "Student Life",
            own: false,
            like: true,
            days: 9,
            link: "https://images.unsplash.com/photo-1701602714058-0d1403f606fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDh8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 32,
            title: "BCIT Environmental Science Symposium",
            postContent: "Engage in discussions about environmental science at BCIT. Share research findings, discuss sustainability projects, or propose initiatives to promote eco-friendly practices on campus. Let's work together for a greener future!",
            number: 32,
            comments: [
                { id: 1, user: "EcoScience", text: "Exciting initiatives! How can students get involved in environmental projects at BCIT?" },
                { id: 2, user: "SustainableLiving", text: "I'm passionate about environmental science. Let's collaborate on projects together!" },
            ],
            postCategory: "Program",
            own: true,
            like: false,
            days: 6,
            link: "https://images.unsplash.com/photo-1701453031915-60f4fc287f4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0ODJ8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 33,
            title: "BCIT Chess Club: Friendly Matches",
            postContent: "Join the BCIT Chess Club for friendly matches and chess discussions. Whether you're a beginner or a seasoned player, everyone is welcome! Share your chess strategies, coordinate matches, and let's build a vibrant chess community at BCIT.",
            number: 28,
            comments: [
                { id: 1, user: "ChessMaster", text: "Excited to play chess with fellow students! Let's schedule some matches." },
                { id: 2, user: "StrategicMoves", text: "Any chess enthusiasts here? Let's exchange strategies and improve our game." },
            ],
            postCategory: "Student Life",
            own: false,
            like: true,
            days: 4,
            link: "https://images.unsplash.com/photo-1700804217487-55137a47a82f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0ODV8fHxlbnwwfHx8fHw%3D"
        },
    ],
    postCategory: null
}