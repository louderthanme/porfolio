import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: uuidv4(),
    paid: true,
    date: "2023-12-12",
    title: "Hunter Herald Helper",
    link: "https://hunters-herald-helper.onrender.com",
    githubLink: "https://github.com/louderthanme/HuntersHeraldHelper",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1704222772/portfolio/Hunters%20Herald%20Helper/Hunters_Herald_Helper_sbedsf.png",
    shortDescription:
      "A background service that monitors a hunting reservation calendar for updates, manages image comparisons, and sends notifications.",
    description: [
      "Hunter Herald Helper is designed to monitor a specific webpage for updates. It takes screenshots of the calendar, compares them for changes, and handles updates accordingly.",
      "The application uses Cloudinary for image storage and Google Firestore for URL management. When a change is detected, it updates the stored image and sends out email notifications.",
      "The process involves downloading the stored image URL, comparing it with a new screenshot, and executing actions based on the comparison result.",
      "This service operates in the background without a user interface, continuously monitoring and updating as needed.",
    ],
    technologyStack: [
      "Node.js",
      "Cloudinary",
      "Firestore",
      "Puppeteer",
      "Nodemailer",
      "Pixelmatch",
      "Cron Jobs",
    ],
    highlightedTechnologies: [
      "Node.js",
      "Cloudinary",
      "Firestore",
      "Puppeteer",
      "Nodemailer",
      "Cron Jobs",
    ],
    setup: {
      notes: [
        "This project is a background service and is not intended for local setup or deployment. It is showcased here for portfolio purposes.",
      ],
    },
    usage: {
      description:
        "The Hunter Herald Helper runs as a background service, automatically monitoring a hunting reservation calendar for updates. It uses image comparison to detect changes and sends email notifications when updates are detected.",
    },
    contributions:
      "This project is not open for contributions as it's intended for portfolio purposes.",
    license: "This project is licensed under the MIT License.",
    highlights: {
      howItWorks: {
        description:
          "The application automates the process of monitoring a web-based calendar for updates, notifying the client of any changes. It leverages a combination of web scraping, image processing, and cloud services.",
        technology:
          "Puppeteer, Pixelmatch, PNG.js, Google Firestore, Cloudinary, Nodemailer",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239415/portfolio/Hunters%20Herald%20Helper/Main_Process_l6poqs.png",
            description:
              "The `runProcess` function orchestrates the entire workflow. Initially, it retrieves the last saved image URL from Firestore and downloads it for comparison. Using Puppeteer, the app takes a new screenshot of the calendar. These two images are then compared. If a difference is detected, the new image is uploaded to Cloudinary, the Firestore database is updated with the new image URL, and an email notification is sent to the client using Nodemailer. The old image is then deleted from Cloudinary. This process ensures that the client is always informed about the most recent state of the calendar.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704240437/portfolio/Hunters%20Herald%20Helper/Download_Images_d25d1y.png",
            description:
              "In `downloadImage.js`, I implemented a function to download images using Axios. This function is crucial for retrieving the last known state of the calendar from Firestore, setting the stage for the comparison process.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704240471/portfolio/Hunters%20Herald%20Helper/Clean_Up_tekrx0.png",
            description:
              "The `updateSendCleanup` function in 'updateSendCleanup.js' handles the post-comparison steps. It uploads the new image to Cloudinary, updates Firestore, sends an email notification, and cleans up the old image. This function encapsulates the critical actions taken when a change is detected, ensuring the client receives timely updates.",
          },
        ],
      },
      puppeteerIntegration: {
        description:
          "To capture up-to-date images of the calendar from a website, I integrated Puppeteer into the project. I had to learn how to use puppeteer to take screenshots, then save said screenshots for later comparison..",
        technology: "Puppeteer",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239416/portfolio/Hunters%20Herald%20Helper/Puppeteer_reqciw.png",
            description:
              "In the `takeScreenshot` function, I utilized Puppeteer to launch a headless browser and navigate to the target website. I learned to manage browser instances, handle page navigation, and wait for specific elements (like the calendar) to render. The function captures a screenshot of the calendar and saves it, demonstrating my ability to apply new tools and libraries effectively.",
          },
        ],
      },
      imageComparison: {
        description:
          "The core functionality involves comparing two images of a calendar to detect updates. This process uses Puppeteer for taking screenshots and a custom image comparison algorithm.",
        technology: "Puppeteer, Custom Image Comparison",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239416/portfolio/Hunters%20Herald%20Helper/Are_Images_The_Same_wp2pb7.png",
            description:
              "I implemented the `areImagesTheSame` function to compare two calendar images. To handle this, I integrated Pixelmatch and PNG.js for precise image analysis. My approach was to first read and parse both images, then compare them pixel by pixel. This method is crucial for detecting any changes in the calendar, ensuring accurate notifications to the client.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239415/portfolio/Hunters%20Herald%20Helper/Read_and_Parse_y2pd0z.png",
            description:
              "In `imageParser.js`, I created the `readAndParseImage` function to efficiently load and parse image data. This function forms the backbone of the image comparison process, preparing the images for a detailed pixel-level comparison.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239416/portfolio/Hunters%20Herald%20Helper/Remove_Red_dvi2ay.png",
            description:
              "To address the challenge of false positives in image comparison due to date changes, I devised the `removeRedShades` function. This function specifically targets and neutralizes certain shades of red in the images. By doing so, I ensured that only significant changes in the calendar trigger notifications, enhancing the accuracy and reliability of the application.",
          },
        ],
      },
      cloudinaryIntegration: {
        description:
          "Images are stored and managed using Cloudinary, providing a reliable and efficient way to handle image data.",
        technology: "Cloudinary",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239640/portfolio/Hunters%20Herald%20Helper/Cloudinary_yvqb8q.png",
            description:
              "The 'cloudinary.js' file contains functions for uploading and deleting images to/from Cloudinary. It showcases the integration and management of image data using Cloudinary's API.",
          },
        ],
      },
      firestoreDatabase: {
        description:
          "Google Firestore is used for storing and retrieving image URLs, enabling efficient data management and retrieval.",
        technology: "Google Firestore",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1704239695/portfolio/Hunters%20Herald%20Helper/Firestore_mwk5ha.png",
            description:
              "I chose Google Firestore for its real-time data syncing capabilities. In 'firebase.js', I implemented functions like `getImageInFirestore` and `deleteImageFromFirestore` to handle image data. This approach streamlined the process of storing and retrieving image URLs, ensuring efficient data management.",
          },
        ],
      },
      emailNotifications: {
        description:
          "Upon detecting changes, the application sends out email notifications using Nodemailer, keeping users informed about calendar updates.",
        technology: "Nodemailer",
        images: [],
      },
      cronJobScheduling: {
        description:
          "The application uses cron jobs to schedule regular checks of the calendar, ensuring timely updates and monitoring.",
        technology: "Cron Jobs",
        images: [
          {
            link: "https://github.com/louderthanme/HuntersHeraldHelper/blob/main/app.js",
            description:
              "This snippet from 'app.js' shows the scheduling of a cron job that triggers the 'runProcess' function every X minutes. It's a crucial part of the application's functionality, ensuring regular checks and updates.",
          },
        ],
      },
    },
  },
  {
    id: uuidv4(),
    paid: false,
    date: "2023-11-17",
    title: "WordFlash",
    link: "https://word-flash.vercel.app/",
    githubLink: "https://github.com/louderthanme/WordFlash",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1701795724/portfolio/WordFlash/Main_Page_pfkbkp.jpg",
    shortDescription:
      "An interactive flashcard application for language learning, featuring user authentication, Openai integration, and various modes of learning.",
    description: [
      "WordFlash is an educational tool designed to assist in language learning through interactive flashcards.",
      "The application includes user authentication, allowing users to create personalized accounts for saving their word collection.",
      "It features a chat component where users can look up certain words getting a flash card back, the flash card is saved automatically for later use.",
      "The flashcards can be viewed in different modes, including a word view and a flashcard view, sorted either alphabetically or by word classification.",
    ],
    technologyStack: [
      "React",
      "OpenAi",
      "Node.js",
      "Express",
      "Firebase",
      "Mui/Joy",
      "Vite",
      "Render",
      "Vercel",
      "React Router",
    ],
    highlightedTechnologies: [
      "React",
      "Node.js",
      "Express",
      "Firebase",
      "Vite",
      "OpenAi",
      "Mui/Joy",
      "Render",
      "Vercel",
      "React Router",
    ],
    setup: {
      dependencies: "yarn install",
      devServer: "yarn start",
      notes: [
        "Ensure to set up Firebase for authentication and backend services. Update the Firebase configuration in the project accordingly.",
      ],
    },
    usage: {
      authentication:
        "User Authentication: Users can sign up and log in to track their learning progress.",
      chatFunctionality:
        "Chat Functionality: Interactive chat component for user discussions.",
      learningModes:
        "Learning Modes: Multiple modes of learning including flashcards and word views.",
      progressTracking:
        "Progress Tracking: Users can track their learning progress over time.",
    },
    contributions:
      "This project is open for contributions. Please feel free to contribute to the development.",
    license:
      "This project is licensed under the MIT License. Feel free to use and modify it as per the license terms.",
    highlights: {
      openAI: {
        description:
          "'WordFlash' utilizes OpenAI's API for an interactive Spanish learning experience. Users enter Spanish words to receive flashcards featuring translations, definitions, examples, and related words. The system also offers alternatives for unrecognized inputs. Key challenges included ensuring accurate responses and avoiding non-target languages, enhancing both learning and user experience.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967739/portfolio/WordFlash/openai/Prompt_ouzxd3.png",
            description:
              "In this part of the code, I've implemented the getWordInformation function, which is central to the OpenAI API integration. It sends the user's input to the OpenAI API and processes the response to return structured data. This function demonstrates how I've utilized the API to generate meaningful and contextually relevant information for the application. Note that the prompt shown here has been reduced for brevity; the full code, including the complete prompt, is available in the repository.",
          },
        ],
        technology: "React, Node.js, Express.js, OpenAI API",
        githubLink: "https://github.com/louderthanme/WordFlash",
      },
    },
    highlights: {
      Chat: {
        description: "",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967790/portfolio/WordFlash/chat/Responsive_r5pjbm.gif",
            description:
              "I designed this chat interface to allow users to easily input words, showcasing the simplicity and user-friendliness of the application. It is aimed at a predominantly a mobile audience, however due to its responsive design I can ensure a seamless experience across various devices.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967787/portfolio/WordFlash/chat/Flashcard_fetch_b5gakj.gif",
            description:
              "When the query first goes through a loading spinner is shown. Then the flashcard shows up populated by the response from the Openai API.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967787/portfolio/WordFlash/chat/Wrong_input_kxwgxz.gif",
            description:
              "If the input is not a Spanish word or phrase, it will show words the user might have meant related in phonetics or morphology to the input.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967786/portfolio/WordFlash/chat/JSX-_CHAT_yibcnj.png",
            description:
              "The Chat component is modular for easier upkeep. This is a quick gif of the code, feel free to look for the rest in the repo.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701975703/portfolio/WordFlash/chat/handleSubmit_jbn724.png",
            description:
              "This screenshot displays the handleSubmit function in its entirety, emphasizing its dual functionality. It showcases how the function is designed to handle both form submission events and direct word inputs. This part of the code exemplifies the function's adaptability and my ability to create versatile and reusable components in a React application.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967786/portfolio/WordFlash/chat/Question_Box_qfeudx.png",
            description:
              "Here, handleSubmit is integrated into the QuestionBox component. This screenshot demonstrates how the function processes user-submitted queries via a form. It highlights the event-driven aspect of the function, dealing with user interactions and dynamic data handling in the application.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967786/portfolio/WordFlash/chat/SearchError_nr8btg.png",
            description:
              "SearchError component inside the Flashcard component, where the same handleSubmit is employed for direct word processing and handling alternative word suggestions during search errors. It illustrates the function's flexibility and its crucial role in enhancing user experience by offering interactive solutions in different scenarios.",
          },
        ],
        technology: "React, Node.js, Express.js, OpenAI API",
        githubLink: "https://github.com/louderthanme/WordFlash",
      },
      collection: {
        description:
          "The Collection component in 'WordFlash' serves as a user's personal repository of words they have looked up.They are automatically saved after every query, provided that the word isn't repeated. It displays words saved by the user in either a list view or as flashcards, offering flexibility in how the information is presented and reviewed. Users can sort their collection alphabetically or by classification, enhancing the ease of navigation and study. The component also allows users to delete words from their collection, ensuring that their learning material remains relevant and tailored to their needs.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967802/portfolio/WordFlash/collection/Views_rohpzm.gif",
            description:
              "This shows the collection page cycling through the List and Flashcard view.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701967801/portfolio/WordFlash/collection/Classifications_usfsex.gif",
            description:
              "The user can also sort either view the collection by alphabetical order or by classification.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701975862/portfolio/WordFlash/collection/Delete_pbcqgh.gif",
            description:
              "The user can delete words from their collection, ensuring that their learning material remains relevant and tailored to their needs.",
          },
        ],
      },
      Authentication: {
        description:
          "In creating the `AuthPage` component, I designed a user-friendly interface for both signing in and signing up. I made the decision to manage the display with a simple toggle state, allowing users to switch views with ease.  I chose a centered layout for a clean and focused user experience, with the forms adapting dynamically to the user's needs. The snackbar messages are set to appear at the top of the page, ensuring they are noticeable yet unobtrusive. I leveraged",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701976171/portfolio/WordFlash/Authentication/SignInUp_uk876k.gif",
            description: "The Sign In or Sign Up views are a button a way.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1701968036/portfolio/WordFlash/Authentication/Snackbar_x8nxrl.gif",
            description:
              "I implemented snackbars for succestul or unsuccessful login attempts.",
          },
        ],
      },
    },
  },
  {
    id: uuidv4(),
    paid: false,
    date: "2023-10-16",
    title: "Portfolio",
    link: "https://ruben-aguirre.com/",
    githubLink: "https://github.com/louderthanme/porfolio",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1701797194/portfolio/Portfolio/Main_Page_syeaa0.png",
    shortDescription:
      "A personal portfolio showcasing projects, skills, and experiences.",
    description: [
      "This portfolio is a comprehensive showcase of my skills, projects, and experiences as a developer. It includes detailed project overviews, experiences, education, and contact information.",
      "The portfolio leverages modern web technologies to provide a responsive and interactive user experience. Highlights include dynamic project presentations, detailed descriptions, and a clean, engaging UI.",
    ],
    technologyStack: ["React", "Material UI", "React Router", "Cloudinary"],
    highlightedTechnologies: ["React", "Material UI", "Cloudinary"],
    setup: {
      notes: [
        "This project can be set up locally for development purposes. It requires Node.js and npm installed. Clone the repository, install dependencies with npm install, and run with npm start.",
      ],
    },
    usage: {
      description:
        "The portfolio serves as an interactive resume, detailing projects I've worked on, my skill set, and my career experiences. It's designed to be intuitive, allowing users to explore my professional journey and contact me for opportunities. I also learned MUI Joy and made a custom theme to work with it",
    },
    contributions:
      "Feedback and suggestions on the portfolio are welcome. Feel free to raise an issue or submit a pull request on GitHub.",
    license: "This project is licensed under the MIT License.",
    highlights: {
      dynamicProjectPresentation: {
        description:
          "Projects are showcased with detailed overviews, including technologies used, project objectives, and outcomes. Interactive carousels allow for engaging exploration of project images.",
        technology: "React, Material UI",
        images: [],
      },
      responsiveDesign: {
        description:
          "The portfolio is fully responsive, ensuring a seamless experience across all device sizes. It adapts gracefully from desktop to mobile screens, highlighting my skills in responsive web design.",
        technology: "CSS, Media Queries, Material UI",
        images: [],
      },
      contentManagement: {
        description:
          "Project and experience data are managed through a centralized context, facilitating easy updates and maintenance of the portfolio's content.",
        technology: "React Context API, JavaScript",
        images: [],
      },
    },
  },
  {
    id: uuidv4(),
    paid: false,
    date: "2023-07-19",
    title: "Nibble Notebook",
    link: "https://nibblenotebook.com",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
    shortDescription:
      "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    description: [
      "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
      "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
      "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
      "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
      "A search function is available, allowing users to search recipes by tags or keywords.",
    ],
    technologyStack: [
      "React",
      "Vite",
      "Firebase (for authentication and database)",
      "Cloudinary (for image uploads)",
      "Express (for the development server)",
      "Serverless functions (for deployment)",
      "React Router",
      "Vite",
    ],
    highlightedTechnologies: [
      "React",
      "Node.js",
      "Express",
      "Firebase",
      "Cloudinary",
      "Material UI",
      "Vercel",
      "React Router",
      "Vite",
    ],
    setup: {
      dependencies: "yarn install",
      devServer: "yarn start-server",
      frontend: "yarn dev",
      liveBuild: "yarn start",
      notes: [
        "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required.",
      ],
    },
    usage: {
      authentication:
        "User Authentication: Users can sign up and log in using email/password or Google authentication.",
      profile:
        "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
      dailyRecipe:
        "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
      sharing:
        "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
      search: "Search: Search for recipes using tags or keywords.",
    },
    contributions:
      "This project is not open for contributions as it's intended for portfolio purposes.",
    license:
      "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
    highlights: {
      authentication: {
        description:
          "In creating the `AuthPage` component, I designed a user-friendly interface for both signing in and signing up. I made the decision to manage the display with a simple toggle state, allowing users to switch views with ease.  I chose a centered layout for a clean and focused user experience, with the forms adapting dynamically to the user's needs. The snackbar messages are set to appear at the top of the page, ensuring they are noticeable yet unobtrusive. I leveraged ",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488289/portfolio/Nibble%20Notebook/Authentication/Signin_j9cxr7.png",
            description: "Sign in page",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488289/portfolio/Nibble%20Notebook/Authentication/SignUp_nniz6r.png",
            description: "Sign up page",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488290/portfolio/Nibble%20Notebook/Authentication/CodeAuth_m4i53n.png",
            description:
              "Both views are components on the AuthPage page. A simple react state is set to switch between the two views.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488291/portfolio/Nibble%20Notebook/Authentication/codeSingIn_ofpwr7.png",
            description:
              "In the SignIn component, I've implemented a simple sign-in interface using Firebase for authentication, with options for email or Google login. It smartly redirects users after sign-in and provides immediate feedback on input errors. There's also a quick link for new users to switch to SignUp. The SingUp component is very similar.",
          },
        ],
        technology: "React: Context and State, Firebase",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/tree/main/src/components/Authentication",
      },
      dailyRecipe: {
        description:
          "I developed a DailyRecipe component which enhances user engagement by showcasing a daily featured recipe. I integrated the previously mentioned favourite system that allows users to mark recipes as favourites and incorporated a social sharing functionality with a custom hook for a seamless user experience. To improve performance and responsiveness, I also implemented a utility to optimize image loading. This leads users to share it, or save it to their favorites, or even upload their own recipes.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567188/portfolio/Nibble%20Notebook/DailyRecipe/dailyRecipe_w7bea0.gif",
            description:
              "In designing this UI, I prioritized clarity and visual appeal. I chose a soothing color palette to invite users into a daily culinary exploration. I decided on an intuitive layout, where the day's featured recipe is presented with accessible action buttons—'Go to Recipe' and 'Share'—to encourage user engagement. I incorporated interactive elements like the favorite icon, which animates upon interaction, to create a satisfying user experience.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567188/portfolio/Nibble%20Notebook/DailyRecipe/dailyRecipeCode_i2wddi.png",
            description:
              "In the useDailyRecipeSelector custom React hook, I designed a function that takes an array of recipes and determines the 'Recipe of the Day' based on the current date. It formats the date into a reader-friendly version and uses it to cycle through the recipe list for a fresh selection every day. If the recipe list is empty, the hook adapts to display a message indicating no available recipe.",
          },
        ],
        technology: "React, Custom React Hooks, Cloudinary, React Router",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/tree/main/src/components/Recipe/daily-recipe",
      },
      favouriting: {
        description: "Edit: Users can edit their recipes.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567522/portfolio/Nibble%20Notebook/Favouriting/FavouriteAction_mso7wu.gif",
            description:
              "I made favouriting one click away whenever a recipe is in view.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567517/portfolio/Nibble%20Notebook/Favouriting/FavouriteViewUserProfile_kukgty.png",
            description: "Favourites show up in the User Profile",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567516/portfolio/Nibble%20Notebook/Favouriting/image1-_favouriteLogicUserContext_x3z1r9.png",
            description:
              "The favorite functionality in UserProvider is the cornerstone of personalizing the user experience. It asynchronously updates the user's favorite recipes, allowing them to effortlessly curate their own collection of go-to dishes, and reflects changes in real-time, thanks to Firebase integration.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567517/portfolio/Nibble%20Notebook/Favouriting/image2-favouriteFirebaseLogic_fnkiqr.png",
            description:
              "This function utilizes Firebase to update a user's favorite recipes list, checking for uniqueness before appending the new choice, all to create a curated culinary journey. This function is called within the user provider",
          },
        ],
        technology: "React: State Management, Firestore",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/blob/main/src/contexts/user.context.jsx",
      },
      profile: {
        description:
          "I developed a feature that allows users to manage their own recipes and favorite recipes, enhancing their experience with a personalized dashboard for all CRUD operations.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567802/portfolio/Nibble%20Notebook/UserProfile/manageRecipesView_ioxr2h.gif",
            description:
              "The User Profile Interface is where you can manage your recipes, delete them, edit them or share them. You can also see your favorite recipes.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568318/portfolio/Nibble%20Notebook/UserProfile/favouriteSection_l2vfur.gif",
            description:
              "Search functionality within the profile to quickly add more recipes to your favorites.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567795/portfolio/Nibble%20Notebook/UserProfile/CentralLogicHub_znus2v.png",
            description:
              "I made the UserProfile component to act as a central hub for user interactions, integrating React Context for global state management and hooks to manage component lifecycle and state.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567796/portfolio/Nibble%20Notebook/UserProfile/recipesbyuser_pb0oyy.png",
            description:
              "I utilized the useEffect hook to fetch user-specific recipes upon user ID changes, which I implemented to ensure real-time data synchronization with the user's actions.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567799/portfolio/Nibble%20Notebook/UserProfile/activeTabLogic_d9rskj.png",
            description:
              "I chose a conditional rendering approach for this component, allowing it to display content based on the active tab. This showcases my approach to efficient UI state management. A similar approach is taken to display the delete and edit buttons on the images. Edited for image size, the full code is available in the repository.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567795/portfolio/Nibble%20Notebook/UserProfile/navigation_zcihet.png",
            description:
              "I integrated programmatic navigation using the useNavigate hook from React Router to redirect users to different parts of the app, reflecting my attention to a seamless user journey.",
          },
        ],
        technology:
          "React, React Hooks, Context API, Material UI, React Router",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/blob/main/src/pages/user-profile/user-profile.component.jsx",
      },
      responsiveness: {
        description:
          "Every single page or view in this app responds to mobile, tablet or desktop sizes.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568841/portfolio/Nibble%20Notebook/Responsiveness/home_page_eygdaf.gif",
            description: "Home page",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568839/portfolio/Nibble%20Notebook/Responsiveness/upload_page_mgyjyx.gif",
            description: "Upload/edit page",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568846/portfolio/Nibble%20Notebook/Responsiveness/user_page_mbbx4i.gif",
            description: "User Page",
          },
        ],
        technology: "React, Material UI, CSS",
      },
      search: {
        description: "Search: Search for recipes using tags or keywords.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568994/portfolio/Nibble%20Notebook/SearchBar/SearchBarInAction_kdiecu.gif",
            description:
              "This is the search bar, the placeholder changes to different products as examples. You can search via exact match or keywords.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568992/portfolio/Nibble%20Notebook/SearchBar/SearchBarDifferentContext_pzw09b.png",
            description: "It can be used in different parts of the app.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568990/portfolio/Nibble%20Notebook/SearchBar/codeImage1-SearchbarBox_i7lcvt.png",
            description:
              "I designed SearchBarBox to engage users with rotating prompts, sparking their appetite for adventure in the kitchen. Every few seconds, a new culinary quest appears, inviting them to explore the endless possibilities of recipes.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568991/portfolio/Nibble%20Notebook/SearchBar/codeImage2-searchBarHandleChange_rmcamu.pnge/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
            description:
              "My goal was to keep the UI clutter-free, so I implemented a conditional render that switches between showing trending recipes and the user's search results. It ensures a seamless and focused culinary discovery experience.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568991/portfolio/Nibble%20Notebook/SearchBar/codeImage3-searchBarHandleChange_rmcamu.png",
            description:
              "In the handleChange function, I've set up a straightforward search-trigger mechanism. As users type, it begins the hunt for recipes, making the search process intuitive and dynamic.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568991/portfolio/Nibble%20Notebook/SearchBar/codeImage4-SearchBarResults_xnf9dy.png",
            description:
              "With the SearchResults component, I aimed to create a pleasing look. The search yields a tidy grid of recipe cards, each a snapshot and a gateway to a delicious dish, just a click away.",
          },
        ],
        technology: "React: Context and State, Firestore",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/tree/main/src/components/Home/search-bar",
      },
      sharing: {
        description:
          "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
            description: "Sharing Feature in Action",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569682/portfolio/Nibble%20Notebook/Sharing/SharingHook_p5lcec.png",
            description:
              "I designed a custom  hook to control the visibility and placement of a share window popup. With a click the window appears right where the user needs it, enhancing the interactivity of the UI.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
            description:
              "To make useShareWindow work I implemented a React portal to seamlessly render components like modals outside the regular DOM hierarchy. This allows me to place elements exactly where needed on the screen, ensuring a consistent and clean user experience.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569362/portfolio/Nibble%20Notebook/Sharing/Paper-position_jqzmfi.png",
            description:
              "The actual share window implements this ideas by using the coordinates for the positioning of the paper. The sharing process is handlged by the library React-Share",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569363/portfolio/Nibble%20Notebook/Sharing/propagationstop_qhtan9.png",
            description:
              "This code showcases the integration of a FacebookShareButton with a custom StopPropagationWrapper for seamless social sharing, ensuring click events don't bubble up unexpectedly in the app.",
          },
        ],
        technology: "React, React Hooks, React Portals, React-Share",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/blob/main/src/components/ui/share-window/share-window.component.jsx",
      },
      upload: {
        description:
          "Recipe Upload: Enables users to contribute their own recipes, complete with images, preparation times, ingredients, instructions, and tags for a rich culinary sharing experience. The Edit component functions similarly, allowing users to update their recipes with ease.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569838/portfolio/Nibble%20Notebook/Upload/uploadUI_bxvjoo.gif",
            description:
              "User Interface for recipe upload, using Material-UI components for a clean and responsive design.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569835/portfolio/Nibble%20Notebook/Upload/EditUI_esrndt.jpg",
            description:
              "The Edit interface is the same but it displays information present in the recipe. It's presented here in a smaller viewport for variety.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570639/portfolio/Nibble%20Notebook/Upload/State_and_Context_k85irx.png",
            description:
              "Utilization of React's useState and useContext hooks for managing the form's state and user authentication.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569835/portfolio/Nibble%20Notebook/Upload/StateContext_j4fzo8.png",
            description:
              "The useForm hook from react-hook-form is used to handle form submission, validation, and resetting the form state.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569834/portfolio/Nibble%20Notebook/Upload/useNavigate_jktscy.png",
            description:
              "Leveraging the useNavigate hook from React Router for post-submission navigation to the newly created recipe page.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569837/portfolio/Nibble%20Notebook/Upload/SnackbarHookAndUse_o8ysv0.png",
            description:
              "Implementation of a Snackbar component for user notifications utilizing a custom useSnackbar hook for enhanced UX.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569836/portfolio/Nibble%20Notebook/Upload/ImageUploadFunctionality_aio3rh.png",
            description:
              "Integration of image uploading logic with feedback on progress and error handling for a seamless user experience. Using cloudinary and serverless functions to manage upload.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569837/portfolio/Nibble%20Notebook/Upload/TagHandling_bsnlnh.png",
            description:
              "Complex tag input functionality, allowing users to add and remove tags dynamically, enriching the recipe metadata.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569833/portfolio/Nibble%20Notebook/Upload/Modularity_k2uepy.png",
            description:
              "All of the code is extracted into reusable forms, re used in the Edit page.",
          },
        ],
        technology:
          "React, React Hooks, Material-UI, React Router, Cloudinary API",
        githubLink:
          "https://github.com/louderthanme/recipes-second-version/tree/main/src/pages/recipe-upload",
      },
      convenience: {
        description:
          "These are small hooks, or utils that came in handy during coding.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570741/portfolio/Nibble%20Notebook/Convenience/handleGoogleAuthentication_ampoyn.png",
            description:
              "Observing Firebase's interchangeable handling of user sign-ins and registrations, I deliberately employed the handleGoogleAuthentication hook across the SignIn and SignUpForm components. This integration takes advantage of Firebase's backend logic, providing a uniform authentication route for users. My decision underscores a thoughtful design choice that not only streamlines the user's journey but also simplifies the development process by aligning closely with Firebase's inherent functionality.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570742/portfolio/Nibble%20Notebook/Convenience/StopPropagationWrapper_q15dmc.png",
            description:
              "I've created a handy React component named StopPropagationWrapper to prevent click events from bubbling up the DOM tree. By wrapping elements with this, I ensure that any click event inside is contained, making it super convenient when I need to isolate interactive elements without affecting the surrounding elements.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570741/portfolio/Nibble%20Notebook/Convenience/snackbarHook_h4hrln.png",
            description:
              "I've integrated a custom React hook, useSnackbar, with the Material-UI Snackbar component to streamline displaying notifications in my app. This hook initializes with a default severity state and exposes functions to show and hide the snackbar, which are wired to the MUI Alert's properties. The complete interaction is smooth and efficient, leveraging MUI's polished visual components. For those interested in seeing the full implementation and how it fits into a larger application, the complete code is available in the repository.",
          },
        ],
        technology: "Javascript, custom hooks, utils, and more",
      },
    },
  },
  {
    id: uuidv4(),
    paid: false,
    date: "2023-04-26",
    title: "Clothing Store",
    link: "https://main--stately-rabanadas-ba7cd5.netlify.app/",
    githubLink: "https://github.com/louderthanme/Clothing-Store",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1699927325/portfolio/Clothing%20Store/Web_capture_13-11-2023_20125_hilarious-concha-0e6255.netlify.app_yiclaw.jpg",
    shortDescription:
      "An online clothing store application allowing users to browse, select, and purchase fashion items. Shopping cart functionality included.",
    description: [
      "This application serves as an online platform for a clothing store, offering a variety of fashion items for users to explore and purchase.",
      "It includes user authentication, enabling users to create accounts, sign in, and manage their purchases.",
      "The shopping cart functionality allows users to add items to their cart, review them, and proceed to checkout.",
      "Product categories are well-organized, making it easy for users to find specific types of clothing items.",
    ],
    technologyStack: [
      "React",
      "Firebase (for authentication and database)",
      "Sass (for styling)",
      "React Router (for navigation)",
      "Netlify (for deployment)",
      "Create React App",
    ],
    highlightedTechnologies: [
      "React",
      "Firebase",
      "Sass",
      "Netlify",
      "Create React App",
    ],
    setup: {
      dependencies: "yarn install",
      devServer: "yarn start",
      notes: [
        "Firebase is configured for authentication and data storage. Ensure to set up your own Firebase project and update the configuration accordingly.",
      ],
    },
    usage: {
      authentication:
        "User Authentication: Users can sign up, log in, and manage their accounts.",
      shoppingCart:
        "Shopping Cart: Users can add items to their cart, review them, and proceed to checkout.",
      productCategories:
        "Product Categories: Easy navigation through various clothing categories.",
      userProfile:
        "User Profile: Users can view and manage their profile and purchase history.",
    },
    contributions:
      "This project is open for contributions. Feel free to fork the repository and submit pull requests.",
    license:
      "This project is licensed under the MIT License. Feel free to use it as per the license terms.",
    highlights: {
      Cart: {
        description:
          "Cart Context: Mastering React's Context API in my first React project. Implementing CartContext was a significant learning curve, but it effectively demonstrated how global state can be managed without prop drilling, a concept that was new and intriguing to me at the time. You can also see me becoming more comfortable with ternary operators and the spread operator. Remember you can zoom in on the images, and you can also see the full code in the repository.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700089757/portfolio/Clothing%20Store/Cart%20Context/Adding_item_to_cart_rtmwtz.gif",
            description:
              "The shopping cart interface is seamlessly integrated into every page of the online store, allowing users to view and edit their selected items at any moment. When a user adds a product to their cart from the store, the cart updates instantly to reflect the new item, displaying the product image, name, and price. This feature ensures a smooth and uninterrupted shopping experience.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700089755/portfolio/Clothing%20Store/Cart%20Context/Base_Cart_Functions_b9be8j.png",
            description:
              "This snippet marks my initial foray into React's Context API.  I tackled dynamic cart operations such as adding, removing, and clearing items. This was a challenging yet rewarding experience, as it deepened my understanding of state management in React and how to handle complex state logic efficiently.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700089755/portfolio/Clothing%20Store/Cart%20Context/Use_Effects_t02q6j.png",
            description:
              "Utilizing useEffect hooks to update the cart count and total was a practical application of React's reactivity system. This part of the project was particularly enlightening, as it showcased the power of hooks and how they can be used to keep the application's state synchronized with the UI.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700089755/portfolio/Clothing%20Store/Cart%20Context/Cart_Functions_dlurxc.png",
            description:
              "I then implemented the dynamic cart operations and passed them on to the CartContext. This was a crucial step in ensuring a smooth user experience, as it allowed me to manage the cart's visibility and contents with ease.",
          },
        ],
        technology: "React: Context API, useState, useEffect",
        githubLink:
          "[Link to the specific file or section in your GitHub repository]",
      },
      User: {
        description:
          "User Context: Integrating Firebase with React Context for user authentication. Throughout the code you can see my comments helping me better understand the use of context and how it interacted with Firebase",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700091691/portfolio/Clothing%20Store/User%20Context/Sign_In_rc553z.gif",
            description: "Sign in page",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700091621/portfolio/Clothing%20Store/User%20Context/UI_change_gngly5.gif",
            description:
              "Sign In or Sign Out button in the navigation bar. Displayed conditionally.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700091620/portfolio/Clothing%20Store/User%20Context/Conditional_rendering_wdfuwn.png",
            description:
              "I learned how to use the ternary operator to conditionally render components based on the user's authentication status",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700091619/portfolio/Clothing%20Store/User%20Context/Firebase_eaajbr.png",
            description:
              "This code represents my initial steps in integrating Firebase authentication into a project. Setting up firebase was a little hard to comprehend, but now I prefer it to passport.js. I can add a lot of useful information into the User metadata.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700091620/portfolio/Clothing%20Store/User%20Context/Use_Effect_zsgy6o.png",
            description:
              "The use of useEffect to listen for authentication state changes was a key learning point. It was fascinating to see how React hooks could be combined with Firebase to create a responsive and dynamic user authentication system.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700091620/portfolio/Clothing%20Store/User%20Context/Wrapper_isa95a.png",
            description:
              "Learning to set up the UserProvider to wrap around the application's components was a fascinating process to manage the user's authentication state. This  allowed me to provide the current user's state universally. This was a practical application of React Context that significantly improved the scalability and maintainability of the user authentication system.",
          },
        ],
        technology: "React: Context API, useState, useEffect, Firebase",
        githubLink:
          "https://github.com/louderthanme/Clothing-Store/blob/main/src/context/cart.context.jsx",
      },
      categoriesContext: {
        description:
          "Categories Context: Managing product categories using React Context and Firebase.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700092749/portfolio/Clothing%20Store/Categories%20Context/Categories_Context_a9ltpb.png",
            description:
              "Utilizing useEffect to fetch category data from Firebase was a significant learning curve. It was intriguing to see how asynchronous operations could be seamlessly integrated within React's lifecycle methods to update the application's state. Creating the  CategoriesProvider was a strategic implementation to encapsulate and provide the categories data to the entire application.  Eliminating the need for prop drilling",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700092659/portfolio/Clothing%20Store/Categories%20Context/Products_Injection_tkwakr.png",
            description:
              "I then consumed the context in the Category component.",
          },
        ],
        technology: "React: Context API, useState, useEffect, Firebase",
        githubLink:
          "https://github.com/louderthanme/Clothing-Store/blob/main/src/context/categories.context.jsx",
      },
      Checkout: {
        description:
          "Checkout: In this page a user can see all the items in their cart and the total. They can also remove items from the cart. This syncs up right away with the cart context.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700094424/portfolio/Clothing%20Store/Checkout/Checkout_Page_o73mvd.jpg",
            description:
              "The user can see their total and head to the checkout process.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700094424/portfolio/Clothing%20Store/Checkout/Checkout_Style_wchlba.png",
            description:
              "Every view in this app is a styled component. I learned how to use styled components to create reusable components and to style them.",
          },
        ],
      },
      technology: "Styled Components, React, React Router",
      githubLink:
        "https://github.com/louderthanme/Clothing-Store/blob/main/src/routes/checkout/checkout.component.jsx",
    },
    modularity: {
      description:
        "Modularity in Components: Demonstrating the use of modular components to build a cohesive and interactive shopping cart feature.",
      codeImages: [
        {
          link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700094474/portfolio/Clothing%20Store/Modularity/Cart_Dropdown_ipwh52.png",
          description:
            "The CartDropdown component is a testament to my understanding of modularity and context in React. It uses the CartContext to access and display cart items, and integrates navigation with React Router for a seamless user experience.",
        },
        {
          link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700094473/portfolio/Clothing%20Store/Modularity/Cart_Icon_nwkzqp.png",
          description:
            "In the CartIcon component, I learned the power of concise and focused components. This component not only displays the cart icon and item count but also toggles the cart's visibility, showcasing the effective use of context for state management.",
        },
        {
          link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700094473/portfolio/Clothing%20Store/Modularity/Cart_Item_hdzz2c.png",
          description:
            "The CartItem component is a clear example of a reusable and independent module. It takes a cart item as a prop and displays its details, demonstrating how breaking down the UI into smaller components can enhance maintainability and readability.",
        },
      ],
      technology: "React, React Router",
      githubLink:
        "https://github.com/louderthanme/Clothing-Store/tree/main/src/components",
    },
  },
  {
    id: uuidv4(),
    paid: false,
    date: "2022-10-16",
    title: "YelpCamp",
    link: "https://yelpcamp-gyon.onrender.com",
    githubLink: "https://github.com/louderthanme/YelpCamp",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1699904373/portfolio/YelpCamp/homepage_umpgz2.jpg",
    shortDescription:
      "Yelp for camping enthusiasts! Create and review campgrounds. It features user authentication, campground management, and reviews.",
    description: [
      "YelpCamp is a platform for users to share and discover campgrounds. Users can post campgrounds with details and images, and others can leave reviews.",
      "The application includes user authentication, allowing users to sign up, log in, and manage their campground posts.",
      "Features include creating and editing campgrounds, posting reviews, and user profile management.",
      "Implemented security measures like input validation, authentication, and authorization to ensure a safe user experience.",
      "Responsive design ensures a seamless experience across various devices.",
    ],
    technologyStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "EJS",
      "Bootstrap",
      "Render",
      "Cloudinary",
      "Mapbox",
    ],
    highlightedTechnologies: [
      "Node.js",
      "Express",
      "Cloudinary",
      "MongoDB",
      "Passport.js",
      "EJS",
      "Bootstrap",
      "Render",
    ],
    setup: {
      dependencies: "npm install",
      database: "MongoDB setup required",
      devServer: "nodemon app.js",
      notes: [
        "Ensure to set up the .env file with the required environment variables for database and session configuration.",
      ],
    },
    usage: {
      authentication:
        "User Authentication: Users can sign up and log in using email and password.",
      campgroundManagement:
        "Campground Management: Authenticated users can create, edit, and delete their campground posts.",
      reviews: "Reviews: Users can post and view reviews on campgrounds.",
      userProfiles:
        "User Profiles: Users can manage their profiles and view their campground contributions.",
    },
    contributions:
      "This project is open for contributions. Please read the guidelines in the README.md file before contributing.",
    license: "This project is licensed under the ISC license.",
    highlights: {
      campgroundModel: {
        description:
          "This feature allows users to create, update, and delete campgrounds. It includes image upload functionality and integrates with Mapbox for geocoding.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700009517/portfolio/YelpCamp/Campground%20Model/CampgroundSchemaDefinition_d867qs.png",
            description:
              "Here, I defined the CampgroundSchema with various fields, including a relational setup linking campgrounds to their authors and reviews. My decision to structure the schema in this way highlights my understanding of relational database concepts and my ability to implement them effectively in a NoSQL environment.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700009517/portfolio/YelpCamp/Campground%20Model/ImageSchema_njgn2h.png",
            description:
              "In this snippet, I designed an ImageSchema to store image URLs and filenames. I also implemented a virtual property, thumbnail, which cleverly generates a thumbnail version of the image leveraging Cloudinary. This approach allowed me to dynamically create content without the need for additional data storage, showcasing my ability to optimize data usage.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700009518/portfolio/YelpCamp/Campground%20Model/PopUpMarkup_vqlbtb.png",
            description:
              "I created this virtual property to generate HTML markup for map popups directly within the database schema. This decision was a strategic move to streamline the generation of dynamic, client-side content, demonstrating my ability to integrate front-end and back-end technologies seamlessly.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700009518/portfolio/YelpCamp/Campground%20Model/MiddlewareDeleting_sfaha8.png",
            description:
              "In this part of the code, I implemented a middleware to handle the cascade deletion of reviews when a campground is removed. This was a crucial step to maintain database integrity and cleanliness, reflecting my attention to detail and commitment to creating robust, maintainable code.",
          },
        ],
        technology: "Express, MongoDB",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/models/campground.js",
      },
      campgroundControllers: {
        description:
          "In the Campground Controllers of YelpCamp, I crafted a suite of functions essential for managing campgrounds, ranging from creating and updating campgrounds to handling deletions. By exporting each route handler as a separate function, I ensured that the code was not only maintainable but also scalable. This approach was a significant departure from the more traditional app.post or app.get methods directly in route files, marking a step forward in my coding practices. These are two interesting snippets, but the full code is available in the repository.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700009505/portfolio/YelpCamp/Campground%20Controller/CreatingCampground_ivjqbx.png",
            description:
              "In this function, I integrated Mapbox's geocoding service to convert campground locations into geographical coordinates. This was a key step in enabling the map functionality of YelpCamp. I chose to handle the creation of new campgrounds asynchronously, ensuring a smooth user experience even when dealing with external API calls",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700009505/portfolio/YelpCamp/Campground%20Controller/UpdatingCampground_grqime.png",
            description:
              "Here, I implemented the logic to update campground details, including handling image uploads. I used the spread syntax to efficiently update campground data and manage image arrays. This showcases my ability to work with complex data structures and integrate third-party services like Cloudinary for image management.",
          },
        ],
        technology: "Express, MongoDB",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/controllers/campgrounds.js",
      },
      reviewModel: {
        description:
          "The Review Model is a streamlined yet effective component of YelpCamp, enabling users to leave feedback on campgrounds. It demonstrates my ability to create efficient data structures in a NoSQL environment.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700074287/portfolio/YelpCamp/Review%20UI/Review_UI_l23mpy.jpg",
            description:
              "Adding a review is very simple, using a form with a rating and a text area right under the campground location and next to the details. Old reviews appear below the form.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700072052/portfolio/YelpCamp/ReviewModel/ReviewSchema_qckjbc.png",
            description:
              "This snippet shows the ReviewSchema, where I've defined the essential fields for user reviews. The simplicity of the schema, with fields for the review body, rating, and author, reflects my focus on creating user-friendly and efficient data models. The author field, linked to the User model, showcases my understanding of relational data within MongoDB, ensuring that each review is associated with a specific user.",
          },
        ],
        technology: "Mongoose, MongoDB",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/models/review.js",
      },
      reviewControllers: {
        description:
          "The Review Controllers in YelpCamp facilitate user interactions with reviews, allowing them to add and delete feedback on campgrounds. This section highlights my ability to handle database operations and user interactions efficiently.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700072259/portfolio/YelpCamp/Review%20Controller/addReview_wemlys.png",
            description:
              "In this snippet, I implemented the addReview controller. It showcases my skill in handling asynchronous operations with MongoDB. By retrieving the campground, creating a new review, and then saving both simultaneously using Promise.all, I demonstrated an efficient way to handle multiple database operations. This approach not only ensures data consistency but also optimizes performance.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700072259/portfolio/YelpCamp/Review%20Controller/deleteReview_qug4yj.png",
            description:
              "Here, the deleteReview controller is illustrated. I used the $pull operator in Mongoose to remove a specific review from a campground. This operation, followed by deleting the review itself, highlights my attention to maintaining database integrity. It also shows my ability to implement clean and effective solutions for potentially complex database manipulations.",
          },
        ],
        technology: "Express, MongoDB",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/controllers/reviews.js",
      },
      Users: {
        description:
          "This feature encompasses user authentication and profile management, highlighting my ability to integrate backend authentication mechanisms with user-friendly front-end designs.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700073596/portfolio/YelpCamp/User%20Ui/RegisterWithFeedback_bqrmay.png",
            description:
              "This image showcases the registration form UI. This is where I first learned to add form validation. The feedback enhances the user experience, guiding them through a smooth registration process.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700073500/portfolio/YelpCamp/Log%20In/LogIn_UI_trmxh3.gif",
            description:
              "The log in function was something I was excited about, I liked the feedback after login. Looking back, using react, and firebase makes things much speedier.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700073596/portfolio/YelpCamp/User%20Ui/RegisterWithFeedback_bqrmay.png",
            description:
              "The User model, as shown in this snippet, is streamlined yet functional, incorporating passport-local-mongoose for efficient authentication handling. I chose to use this plugin to add a layer of security and convenience, automatically managing user passwords and sessions. This decision reflects my commitment to creating secure and user-friendly applications.",
          },
        ],
        technology: "Express, Passport.js, Mongoose, EJS",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/models/user.js",
      },
      MapBox: {
        description:
          "This feature showcases my initial foray into integrating a JavaScript library, Mapbox, into an HTML-based project. It was a significant learning experience, laying the groundwork for my understanding of how to effectively incorporate external libraries into web applications.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700075692/portfolio/YelpCamp/Map%20Box/Homepage_Map_a8dscl.png",
            description:
              "This map shows the location of the campgrounds across America, and it is interactive.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700075690/portfolio/YelpCamp/Map%20Box/Show_Page_Map_j1edhu.png",
            description:
              "This map shows the location of the particular campground in a much more zoomed-in view. Useful for finding the exact location of the campground.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700077111/portfolio/YelpCamp/Map%20Box/Cluster_Map_ivqqko.png",
            description:
              "In the clusterMap file, I implemented Mapbox to create an interactive map that clusters campgrounds based on their geographical location. This was my first experience with a library like Mapbox, and it was both challenging and rewarding. I learned to manipulate map styles, control zoom levels, and handle cluster data, which was crucial for the project’s interactive mapping feature.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700077110/portfolio/YelpCamp/Map%20Box/Focused_Map_k4y9sb.png",
            description:
              "The showPageMap file demonstrates a more focused use of Mapbox, displaying individual campground locations. Here, I learned to set map markers and popups, providing users with detailed information about each campground. This part of the project was particularly insightful, as it required a precise handling of geographical coordinates and UI elements.",
          },
        ],
        technology: "JavaScript, Mapbox, HTML",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/public/javascripts/clusterMap.js",
        personalReflection:
          "Working with Mapbox was a pivotal moment in my development journey. Although I now use React and have refined my skills, this project was a real proving ground. It taught me the importance of understanding and integrating third-party libraries, a skill that has been invaluable in my more recent projects.",
      },
      convenience: {
        description:
          "In this section, I show off some of the first middleware I ever wrote. These functions were a significant step in my development journey, teaching me the importance of writing clean, reusable code. They also highlight my ability to leverage Express.js to create robust applications. In this section I showcase two of the middleware functions I wrote, but the full code is available in the repository.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700076215/portfolio/YelpCamp/Convenience/Is_Logged_In_dlxcsc.png",
            description:
              "The isLoggedIn middleware was a key learning point for me. It utilizes Passport.js to check if a user is authenticated. I learned how to manage user sessions and redirect unauthenticated users, which was crucial for maintaining secure access to certain features of the application.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700076215/portfolio/YelpCamp/Convenience/Validate_Campground_d4zajl.png",
            description:
              "In validateCampground, I implemented data validation using Joi. This middleware checks the integrity of campground data before it's processed. Learning to use Joi was instrumental in understanding data validation, helping me prevent invalid data from entering the database and ensuring a robust application.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1700076368/portfolio/YelpCamp/Convenience/CatchAsync_asfqgt.png",
            description:
              "This snippet showcases a higher-order function that I created for error handling in asynchronous middleware. By wrapping any middleware function, it automatically catches any errors and passes them to the next error-handling middleware in Express.js. This was a significant learning moment for me, as it simplified error handling across the application, making the code cleaner and more efficient.",
          },
        ],
        technology: "Express.js, Passport.js, Joi",
        githubLink:
          "https://github.com/louderthanme/yelpcamp/blob/master/middleware.js",
        personalReflection:
          "Creating these middleware functions was a significant step in my journey as a developer. It taught me the importance of writing clean, reusable code and gave me a deeper understanding of Express.js's capabilities. These skills have been invaluable in my subsequent projects.",
      },
    },
  },
  {
    id: uuidv4(),
    paid: true,
    date: "2024-05-08",
    title: "Docx to PDF",
    link: "https://frontend-docxtopdf.vercel.app",
    githubLink: "https://github.com/louderthanme/DocxToPdf",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1721064598/Docx%20To%20Pdf/UI_Selecting_a_File_qgf2em.png", // Update with a relevant screenshot
    shortDescription:
      "A web application to convert DOCX files to PDF, ensuring proper formatting for Hebrew-speaking users.",
    description: [
      "This application converts DOCX documents to PDF format, ensuring proper formatting for Hebrew-speaking users.",
      "Built using LibreOffice for document conversion and Docker for consistent deployment.",
      "Users can upload DOC or DOCX files, which are then processed and returned as PDF files.",
      "The project includes comprehensive documentation, which was highly praised by the client.",
    ],
    technologyStack: [
      "React",
      "Vite",
      "Chakra UI",
      "TypeScript",
      "Express",
      "Docker",
      "LibreOffice",
    ],
    highlightedTechnologies: [
      "React",
      "TypeScript",
      "Express",
      "Docker",
      "LibreOffice",
      "Chakra UI",
    ],
    setup: {
      dependencies: "yarn install",
      devServer: "yarn dev",
      dockerBuild: "docker build -t docx-to-pdf-converter .",
      dockerRun: "docker run -p 3000:3000 docx-to-pdf-converter",
      notes: [
        "Ensure Docker and LibreOffice are installed on your system.",
        "Comprehensive documentation is provided for local and Docker setup.",
      ],
    },
    usage: {
      fileUpload: "Users can upload DOC or DOCX files for conversion to PDF.",
      conversion:
        "The application converts uploaded files to PDF, ensuring proper formatting for Hebrew-speaking users.",
      download:
        "Converted PDF files can be downloaded directly from the application.",
    },
    contributions:
      "This project is not open for contributions as it was developed for a specific client.",
    license: "MIT",
    highlights: {
      dockerfile: {
        description:
          "Implemented a Dockerfile to ensure consistent environment setup and easy deployment. This Dockerfile installs LibreOffice to enable the libreoffice-convert package for document conversion, ensuring the application works both locally and when deployed. The backend is deployed on Render to accommodate the necessary server environment.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064597/Docx%20To%20Pdf/DockerFile_jjlkzv.png",
            description:
              "Configuration of the Dockerfile, including LibreOffice installation to support document conversion.",
          },
        ],
        technology: "Docker",
        githubLink: "https://github.com/louderthanme/DocxToPdf",
      },
      chakraUi: {
        description:
          "First time using Chakra UI for building a responsive and visually appealing frontend. I found the VStack and HStack components particularly handy compared to Material-UI for creating structured layouts. The client didn't ask for a frontend, but I figured it'd be useful to him anyway and it took me very little time to implement. Added some visual markers for selecting a file, for a wrong file type, for the converting wait and for a successful conversion.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064598/Docx%20To%20Pdf/UI_Selecting_a_File_qgf2em.png",
            description: "Selecting UI",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064857/Docx%20To%20Pdf/Wrong_File_qwrf1u.png",
            description: "Wrong File Selected",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064598/Docx%20To%20Pdf/UI_Converting_File_rxhcfb.png",
            description: "Converting Interim UI",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064599/Docx%20To%20Pdf/UI_Downloaded_File_qaxfmx.png",
            description: "File converted successfully and downloaded.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721065052/Docx%20To%20Pdf/ChakraUI_pat2d8.png",
            description:
              "Using VStack and HStack from Chakra UI to build structured layouts.",
          },
        ],
        technology: "Chakra UI",
        githubLink: "https://github.com/louderthanme/DocxToPdf",
      },
      fileOperations: {
        description:
          "Utilized the fs module for handling file operations, including reading, writing, and deleting files. This involved reading the input DOCX file into a buffer, converting it to a PDF, and then writing the PDF back to the file system. Error handling was also crucial to ensure robust file processing.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064597/Docx%20To%20Pdf/ReadIntoBuffer_k4fzxd.png",
            description:
              "Code demonstrating the use of the fs module to read files into a buffer.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064599/Docx%20To%20Pdf/WriteIntoBuffer_jjetol.png",
            description:
              "Example of writing the converted PDF buffer back to the file system.",
          },
        ],
        technology: "Node.js fs module",
        githubLink: "https://github.com/louderthanme/DocxToPdf",
      },
      libreOfficeConvert: {
        description:
          "First time using libreoffice-convert for converting DOCX files to PDF. The library leverages LibreOffice to perform document conversion, ensuring complex formatting and styles are preserved.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064597/Docx%20To%20Pdf/LibreOffice_ffkjad.png",
            description:
              "Using libreoffice-convert to convert DOCX files to PDF, including reading the DOCX file and writing the output PDF file.",
          },
        ],
        technology: "libreoffice-convert",
        githubLink: "https://github.com/louderthanme/DocxToPdf",
      },
      fileUploadAndConversion: {
        description:
          "Implemented file upload and conversion using Express, Multer, and custom modules for converting DOCX to PDF. This process includes validating the file type, handling file storage, managing the conversion process, and ensuring the correct response is sent back to the client.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064598/Docx%20To%20Pdf/FileUploadandNaming_spxfvg.png",
            description:
              "Here the file gets uploaded and validated using Express and Multer. We check the file type to ensure it's a DOC or DOCX file to avoid processing invalid formats.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064600/Docx%20To%20Pdf/ConvertAndDownload_pvsil0.png",
            description:
              "Handling the conversion process and response to return the converted PDF file to the client. This ensures the client receives the correct file with proper error handling in place.",
          },
        ],
        technology: "Express, Multer, Node.js",
        githubLink: "https://github.com/louderthanme/DocxToPdf",
      },
      attentionToDetail: {
        description:
          "Customized the date formatting function to accommodate the client's preferences. This function ensures dates are formatted in the DD-MM-YYYY format, aligning with common date formatting preferences in certain regions.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721064600/Docx%20To%20Pdf/Attention_To_Detail_llwjka.png",
            description:
              "Custom date formatting function tailored to match the client's regional preferences.",
          },
        ],
        technology: "JavaScript",
        githubLink: "https://github.com/louderthanme/DocxToPdf",
      },
    },
  },
  {
    id: uuidv4(),
    paid: true,
    date: "2024-05-16",
    title: "OCR Application",
    link: "https://ocr-app-tawny.vercel.app/",
    githubLink: "https://github.com/louderthanme/ocr-app",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/UploadingFile_khdwij.png",
    shortDescription:
      "This application uses Google Cloud Vision for OCR processing, allowing users to upload images or documents for text extraction.",
    description: [
      "This application utilizes Google Cloud Vision for OCR processing. Users can upload images or documents (PDF/TIFF) to extract text content.",
      "The client wanted to use Google Cloud Vision to integrate OCR capabilities into their project.",
      "The client was very pleased with the results and the speed of development, particularly appreciating the thorough comments and documentation provided, which enabled quick and efficient integration into their project.",
    ],
    technologyStack: [
      "Next.js 14",
      "Chakra UI",
      "Google Cloud Vision API",
      "Google Cloud Storage",
      "Vercel",
      "TypeScript",
    ],
    highlightedTechnologies: [
      "Next.js 14",
      "Google Cloud Vision API",
      "Google Cloud Storage",
      "Chakra UI",
      "TypeScript",
      "Vercel",
    ],
    setup: {
      dependencies: "yarn install",
      devServer: "yarn dev",
      liveBuild: "yarn build",
      notes: [
        "Google Cloud Vision API and Storage are already set up for use. This repository is intended for a specific client who has access to these services.",
      ],
    },
    usage: {
      upload: "Users can upload image, PDF, or TIFF files for OCR processing.",
      viewResults:
        "Processed text results are displayed on the UI and can be downloaded.",
    },
    contributions:
      "This project is not open for contributions as it was developed for a specific client.",
    license: "MIT license",
    highlights: {
      chakraUi: {
        description:
          "Utilized Chakra UI for building a responsive and visually appealing frontend. The VStack and HStack components were particularly useful for creating structured layouts, making the development process smoother.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/UploadingFile_khdwij.png",
            description: "UI for selecting the file.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/OCRRESULT_f40mun.png",
            description: "UI for simple image OCR result.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/OCRPAGEDRESULT_nfhn89.png",
            description:
              "UI for paginated OCR results, usually resulting from a pdf or a tiff",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080421/OCRAPP/Paged_Result_Chakra_UI_bp1jrf.png",
            description:
              "Handling multi-page OCR results with navigation buttons using Chakra UI. This snippet demonstrates how the application manages text extracted from PDFs or TIFFs, including displaying page numbers and navigation controls.",
          },
        ],
        technology: "Chakra UI",
        githubLink: "https://github.com/louderthanme/ocr-app",
      },
      fileUploadAndConversion: {
        description:
          "Implemented file upload and conversion using Google Cloud Storage and Vision API. The process includes validating the file type, handling file storage, managing the OCR process, and ensuring the correct response is sent back to the client.",
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/Google_Cloud_Blob_Creation_nzzqqf.png",
            description:
              "Parsing the uploaded file, creating a buffer, and defining the blob in Google Cloud Storage.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/Google_Credentials_sxylxw.png",
            description:
              "Initializing the Google Cloud Storage and Vision Client with credentials, showcasing secure and effective setup and configuration.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/OCR_PDF_REQUEST_OBJECT_shsblu.png",
            description:
              "Handling POST requests for initiating OCR on PDF/TIFF files, including setting up the request payload and handling multiple pages.",
          },

          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/OCRAPP/OCR_IMAGE_REQUEST_OBJECT_sutmjm.png",
            description:
              "Preparing the OCR request payload and specifying features for image files.",
          },
        ],
        technology: "Google Cloud Storage, Google Cloud Vision API",
        githubLink: "https://github.com/louderthanme/ocr-app",
      },
    },
  },
  {
    id: uuidv4(),
    paid: true,
    date: "2024-05-28",
    title: "Synaptic Landing Page",
    link: "https://synaptic.clinic",
    githubLink: "https://github.com/louderthanme/synaptic-landing-page",
    image:
      "https://res.cloudinary.com/recipeb00k/image/upload/v1721178859/Synaptic%20Landing%20Page/Home_Page_tvtglq.jpg",
    shortDescription:
      "A multi-page landing website for a therapist, featuring dynamic backgrounds, appointment scheduling, and email notifications.",
    description: [
      "The Synaptic Landing Page is a multi-page website created for a therapist, featuring a main landing page, a calendar scheduling page, and an about page.",
      "Users can schedule appointments, and receive Google Calendar invites and custom email notifications via SendGrid.",
      "Dynamic backgrounds change based on the current page, enhancing the visual appeal and user experience.",
    ],
    technologyStack: [
      "Next.js 14",
      "Chakra UI",
      "FullCalendar",
      "SendGrid",
      "Google Calendar",
      "Vercel",
      "TypeScript",
    ],
    highlightedTechnologies: [
      "Next.js 14",
      "Chakra UI",
      "FullCalendar",
      "SendGrid",
      "Google Calendar",
      "TypeScript",
      "Vercel",
    ],
    setup: {
      dependencies: "yarn install",
      devServer: "yarn dev",
      liveBuild: "yarn build",
      notes: [
        "Ensure that you have the necessary API keys for SendGrid and Google Calendar.",
      ],
    },
    usage: {
      upload: "Users can upload image, PDF, or TIFF files for OCR processing.",
      viewResults:
        "Processed text results are displayed on the UI and can be downloaded.",
    },
    contributions:
      "This project is not open for contributions as it was developed for a specific client.",
    license: "MIT license",

    highlights: {
      dynamicBackground: {
        description:
          "Designed and implemented dynamic backgrounds that change based on the page using CSS clip paths and the Particles.js library. Each page has a unique visual representation, including dynamic triangles and gradients, creating an engaging and responsive user experience. The dynamic background and particles background are combined in the layout using Next.js 14 App Router, ensuring smooth client-side and server-side rendering.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178859/Synaptic%20Landing%20Page/Home_Page_tvtglq.jpg",
            description: "This is the home page design",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178860/Synaptic%20Landing%20Page/Calendar_Page_jmqlss.jpg",
            description: "This is the calendar page design.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178861/Synaptic%20Landing%20Page/About_Page_cynkqm.jpg",
            description:
              "This is the about page design, with image placeholders since the client wanted to add their own.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178859/Synaptic%20Landing%20Page/Triangle_CSS_Clip_Paths_ivpsub.png",
            description: "CSS clip paths for creating polygons and triangles.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178860/Synaptic%20Landing%20Page/Background_Change_With_Page_z9jsyc.png",
            description:
              "Background changing based on the current page, demonstrating the responsive design tailored for different sections of the site.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178859/Synaptic%20Landing%20Page/Particle_JS_cvkhcr.png",
            description:
              "Particles.js implementation to represent synaptic connections, adding a dynamic and thematic element to the landing page. The Particles.js component is memoized to enhance performance.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178858/Synaptic%20Landing%20Page/Integration_Into_Next_JS_wqvsny.png",
            description:
              "Integration of dynamic background and particles background in the layout using Next.js 14 App Router, highlighting the client-side and server-side rendering considerations.",
          },
        ],
        technology: "CSS, Particles.js, Clip paths, Next.js 14 App Router",
        githubLink:
          "https://github.com/louderthanme/synaptic-landing-page/blob/main/src/app/_components/DynamicBackground/DynamicBackground.tsx",
      },
      Calendar: {
        description:
          "Used FullCalendar.js and Google Calendar API to create a scheduling system for appointments. The calendar allows users to view available slots, select a time, and schedule an appointment. The Google Calendar API integration ensures that appointments are synced with the therapist's calendar, providing real-time updates and notifications. It also elegantly displays the therapist availability and booked slots with attention to privacy and data protection, this way new users can see the therapist's availability without seeing the details of the appointments.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721179690/Synaptic%20Landing%20Page/Calendar_mn99hq.jpg",
            description:
              "Full calendar displays a custom range of dates and times according to the client's specifications and availability.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721238539/Synaptic%20Landing%20Page/Mobile_Calendar_Page_ftfmot.png",
            description:
              "Mobile friendly design reduces the amount of information displayed to ensure a clean and focused user experience.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178858/Synaptic%20Landing%20Page/EventForm_New_Client_ixksla.png",
            description:
              "Using modals to display appointment details and confirmations allows the user to make last-minute changes to their appointment, and provide the therapist with useful information about why the client is seeking therapy.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178861/Synaptic%20Landing%20Page/Clear_Feedback_for_Success_and_Errors_pgbabc.png",
            description:
              "Clear feedback for successful and failed new appointments is managed using Toast notifications.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178858/Synaptic%20Landing%20Page/Events_In_Local_Time_viu2rt.png",
            description:
              "Events are fetched and created keeping in mind the local time zone of the therapist and the client, ensuring accurate scheduling and notifications.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178858/Synaptic%20Landing%20Page/Google_Calendar_Reminders_pr6fpf.png",
            description:
              "Events are created with an automatic reminder to the client, the day before the appointment, ensuring they don't forget about it.",
          },
        ],
        technology: "Google Calendar API, OAuth2, Node.js",
        githubLink:
          "https://github.com/louderthanme/synaptic-landing-page/tree/main/src/app/calendar",
      },
      emailNotifications: {
        description:
          "Implemented a comprehensive email notification system using SendGrid. This includes sending branded emails to both the therapist and the client with session details, and ensuring all necessary information is conveyed effectively. Branded emails match the site's design and provide a professional touch to the communication process.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178859/Synaptic%20Landing%20Page/Onboarding_Client_Email_atrdzk.png",
            description:
              "An onboarding email for new clients welcomes them to therapy sessions, includes essential details and instructions for accessing online sessions, provides a way to contact the therapist with questions or concerns, and offers a direct link to the meeting room in addition to the Google Calendar invite, accommodating clients who do not use Google.",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178858/Synaptic%20Landing%20Page/New_Client_Email_alert_vkf3dh.png",
            description:
              "An email is also sent to the therapist with the client's details and the reason for therapy, ensuring they are prepared for the session and can provide the best support possible.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721080233/SynapticLandingPage/EmailNotification_Setup.png",
            description: "Setup of SendGrid for sending branded emails.",
          },
        ],
        technology: "SendGrid, Node.js",
        githubLink:
          "https://github.com/louderthanme/synaptic-landing-page/blob/main/src/app/api/calendar-events/route.ts",
      },
      mobileFriendlyDesign: {
        description:
          "Ensured all pages and features are mobile-friendly, including custom backgrounds and special UI elements like SVG hexagons with rounded corners. This involved extensive use of media queries and responsive design principles.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721238539/Synaptic%20Landing%20Page/Mobile_Home_Page_qk9nwl.jpg",
            description: "Mobile Home Page",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721238539/Synaptic%20Landing%20Page/Mobile_Calendar_Page_ftfmot.png",
            description: "Mobile Calendar Page",
          },
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721238539/Synaptic%20Landing%20Page/Mobile_About_Page_jqz5cn.jpg",
            description: "Mobile About Page",
          },
        ],
        technology: "CSS, Media Queries, SVG",
        githubLink:
          "https://github.com/louderthanme/synaptic-landing-page/blob/main/src/app/calendar/fullcalendar.css",
      },
      customSVGElements: {
        description:
          "Created custom SVG elements like hexagons with rounded corners to enhance the visual appeal of the site. These elements are used in various sections of the site to create a unique and engaging design.",
        images: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721178860/Synaptic%20Landing%20Page/SVG_Hexagons_xdoiah.png",
            description:
              "Custom SVG hexagons with rounded corners create a visually appealing design, applied to images and used as backgrounds. They adjust in size to accommodate different viewports.",
          },
        ],
        codeImages: [
          {
            link: "https://res.cloudinary.com/recipeb00k/image/upload/v1721236565/Synaptic%20Landing%20Page/SVG_Hexagon_qynjpl.png",
            description:
              "The hexagons are created using SVG elements with custom dimensions and styles, ensuring a consistent and visually appealing design.",
          },
        ],
        technology: "SVG, CSS",
        githubLink:
          "https://github.com/louderthanme/synaptic-landing-page/blob/main/src/app/_components/Hexagon/HexagonClippedBox.tsx",
      },
    },
  },
];
