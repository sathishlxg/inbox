/*jshint node:true*/
module.exports = function(app) {
    var express = require("express");
    var messagesRouter = express.Router();

    messagesRouter.get("/", function(req, res) {
        res.send({
            message: [
                {
                    id: 1,
                    avatar:
                        "https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg",
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
                        "Once in your life time you will truly come across someone",
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
                            clipSrc:
                                "https://lh3.googleusercontent.com/-gR6Xo5_uP8s/AAAAAAAAAAI/AAAAAAAAAAA/5CTZklN08qY/s132-c/photo.jpg"
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
                            clipSrc:
                                "https://ci6.googleusercontent.com/proxy/zhVGOpL5idNAKq_vbCRCjdgAZy3oaX_Ju5rwNPC_K1SRIwGUQlpPpaco-1T-NepnzdSXxNR8Bh_D7p4qWE7oomy0JKugJA=nu"
                        }
                    ]
                },
                {
                    id: 3,
                    avatar:
                        "https://cdn.wccftech.com/wp-content/uploads/2018/01/Google-Logo.png",
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
                    attachments: [{
                        id: "5.1",
                        fileName: "NewsLetter",
                        fileType: "document",
                        ext: ".pdf",
                        url: "https://google.com"
                    }]
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
                    attachments: []
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
                    avatar:
                        "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
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
