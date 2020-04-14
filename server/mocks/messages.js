/*jshint node:true*/
module.exports = function(app) {
    var express = require("express");
    var messagesRouter = express.Router();

    messagesRouter.get("/", function(req, res) {
        res.send({
            message: [
                {
                    id: 1,
                    avatar: "/assets/images/user_1.jpg",
                    senderName: "Sathish kumar",
                    subject: "FW: Jobs to Apply for",
                    content:
                        "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width.",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 4,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
                    senderName: "Max",
                    subject: "Buffalo boy",
                    content:
                        "Only once in your life, I truly believe, you find someone who can completely turn your world around. You tell them things that you’ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future, dreams that will never come true, goals that were never achieved and the many disappointments life has thrown at you. When something wonderful happens, you can’t wait to tell them about it, knowing they will share in your excitement. They are not embarrassed to cry with you when you are hurting or laugh with you when you make a fool of yourself. Never do they hurt your feelings or make you feel like you are not good enough, but rather they build you up and show you the things about yourself that make you special and even beautiful. There is never any pressure, jealousy or competition but only a quiet calmness when they are around. You can be yourself and not worry about what they will think of you because they love you for who you are. The things that seem insignificant to most people such as a note, song or walk become invaluable treasures kept safe in your heart to cherish forever. Memories of your childhood come back and are so clear and vivid it’s like being young again. Colours seem brighter and more brilliant. Laughter seems part of daily life where before it was infrequent or didn’t exist at all. A phone call or two during the day helps to get you through a long day’s work and always brings a smile to your face. In their presence, there’s no need for continuous conversation, but you find you’re quite content in just having them nearby. Things that never interested you before become fascinating because you know they are important to this person who is so special to you. You think of this person on every occasion and in everything you do. Simple things bring them to mind like a pale blue sky, gentle wind or even a storm cloud on the horizon. You open your heart knowing that there’s a chance it may be broken one day and in opening your heart, you experience a love and joy that you never dreamed possible. You find that being vulnerable is the only way to allow your heart to feel true pleasure that’s so real it scares you. You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life",
                    hasAttachements: true,
                    isPinned: false,
                    attachments: [
                        {
                            id: "4.1",
                            fileName: "Design document v1.0",
                            fileType: "document",
                            ext: ".docx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.2",
                            fileName: "Phone Bill",
                            fileType: "document",
                            ext: ".xlsx",
                            url: "https://google.com"
                        },
                        {
                            id: "4.3",
                            fileName: "Sathish",
                            fileType: "image",
                            ext: ".jpeg",
                            url: "https://google.com",
                            clipSrc: "/assets/images/user_2_big.jpg"
                        },
                        {
                            id: "4.4",
                            fileName: "EL245675326US",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "4.5",
                            fileName: "Salim | Maskara | Tamil Movie Song",
                            fileType: "video",
                            ext: ".mpeg",
                            description: "4:56 - Youtube",
                            url: "https://google.com",
                            clipSrc: "/assets/images/video_src.jpg"
                        }
                    ]
                },
                {
                    id: 3,
                    avatar: "/assets/images/google_logo.png",
                    senderName: "Google",
                    subject: "New sign-in from Chrome on Windows",
                    content:
                        "Hi Sathish kumar, Your Google Account sathishlxg@gmail.com was",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 2,
                    avatar:
                        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                    senderName: "GitHub",
                    subject: "The world's leading software development platform",
                    content:
                        "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team.",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 5,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_j_56.png",
                    senderName: "JS NewsLetter",
                    subject: "#372: JavaScript Testing in 2018",
                    content:
                        "With the increasing amount of boilerplate in modern JavaScript projects, this tool could come in very handy. It’s easy to get started.",
                    isPinned: false,
                    attachments: [
                        {
                            id: "5.1",
                            fileName: "NewsLetter",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "5.2",
                            fileName: "Tips & Tricks",
                            fileType: "document",
                            ext: ".doc",
                            url: "https://google.com"
                        },
                        {
                            id: "5.3",
                            fileName: "Interview quiestions",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "5.4",
                            fileName: "Terms & Conditions",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "5.5",
                            fileName: "log",
                            fileType: "document",
                            ext: ".exe",
                            url: "https://google.com"
                        },
                        {
                            id: "5.7",
                            fileName: "System design",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        },
                        {
                            id: "5.8",
                            fileName: "Testing results",
                            fileType: "document",
                            ext: ".xlsx",
                            url: "https://google.com"
                        }
                    ]
                },
                {
                    id: 6,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_y_56.png",
                    senderName: "Yahoo",
                    subject: "Reminder: Important update to our Terms of Service & Privacy Policy",
                    content:
                        "Please take some time to review and agree to the new unified Terms of Service and Privacy Policy by clicking on the button below.",
                    isPinned: false,
                    attachments: [
                        {
                            id: "6.1",
                            fileName: "Terms & condition",
                            fileType: "document",
                            ext: ".pdf",
                            url: "https://google.com"
                        }
                    ]
                },
                {
                    id: 7,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_t_56.png",
                    senderName: "Tyson",
                    subject: "Best Practices for User Onboarding",
                    content:
                        "We've spent more time studying user onboarding experiences than anyone else in the world. With all of that experience, we've put together a guide to User Onboarding Best Practices.",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 8,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_f_56.png",
                    senderName: "Finance",
                    subject: "Missed today's Breakout Breakfast? Watch the interview now!",
                    content:
                        "Yahoo Finance's Melody Hahm brings you up-close and personal conversations with today's stand-out stars in the business world.",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 9,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_r_56.png",
                    senderName: "React Status",
                    subject: "#73: So we're rocking a new layout..",
                    content:
                        "Hi! It's the same weekly React newsletter you're used to, except we've had a few licks of paint and will be getting a bit more creative with the format as the year goes on.. but for now, baby steps :-)",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 10,
                    avatar: "/assets/images/fb_logo.png",
                    senderName: "Facebook",
                    subject: "Connect with friends, family and other people you know",
                    content:
                        "Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
                    isPinned: false,
                    attachments: []
                }
            ]
        });
    });

    messagesRouter.post("/", function(req, res) {
        res.status(201).end();
    });

    messagesRouter.get("/:id", function(req, res) {
        res.send({
            message: {
                id: req.params.id
            }
        });
    });

    messagesRouter.put("/:id", function(req, res) {
        res.send({
            message: {
                id: req.params.id
            }
        });
    });

    messagesRouter.delete("/:id", function(req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    //app.use('/api/message', require('body-parser'));
    app.use("/messages", messagesRouter);
};
