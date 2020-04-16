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
                    snippet: 'One of my best clients is looking for an experienced Senior Front End Developer in Bay Area to help their company grow',
                    content:
                        `<div id=":17y" class="a3s aXjCH msg-1997800970046085373"><u></u>
                        <div>
                        <p>Hi Sathish Kumar,</p>
                        <p>One of my best clients is looking for an experienced Senior Front End Developer in Bay Area to help their company grow. Your dynamic background makes you a good match for what they need.</p>
                        <p>Check it out: <a href="#" target="_blank">
                        http://www.<span class="il">somesite</span>.com/qc.<wbr>aspx?posId=915&amp;ad=<wbr>recEmail</a></p>
                        <p>Would you be open to discussing this opportunity?</p>
                        <p>If you’re comfortable where you’re at, do you know of anyone who might be interested? I would greatly appreciate a referral.</p>
                        <p>Thanks for your time and consideration!</p>
                        <table style="border-collapse:collapse;margin-top:10px;font-family:Calibri,Arial,sans-serif" width="600" border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                        <tr>
                        <td colspan="4">Thanks,<br>
                        Jonathan</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>`,
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 4,
                    avatar:
                        "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
                    senderName: "Max",
                    subject: "Buffalo boy",
                    snippet: 'Only once in your life, I truly believe, you find someone who can completely turn your world around.',
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
                    snippet: 'Hi Sathish kumar, Your Google Account sathishlxg@gmail.com was',
                    content: `<div class=""><div class="aHl"></div><div id=":1fk" tabindex="-1"></div><div id=":1f9" class="ii gt"><div id=":1f8" class="a3s aXjCH "><div style="margin:0;padding:0" bgcolor="#FFFFFF"><table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0"><tbody><tr height="32px"></tr><tr align="center"><td width="32px"></td><td><table border="0" cellspacing="0" cellpadding="0" style="max-width:600px"><tbody><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="left"><img width="92" height="32" src="https://ci3.googleusercontent.com/proxy/B8_0hh_kIBprLoT8bCePmfELNuVIhjgLTgDYWEe0RSzHp42ddUTNQ2tizIbDltIQPRrdXBsRm-EWiN3x_tupY9IbCUVKWS__eccUtcIL9n-ix3UoA7owUUXxHj8=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/googlelogo_color_188x64dp.png" style="display:block;width:92px;height:32px" class="CToWUd"></td><td align="right"><img width="32" height="32" style="display:block;width:32px;height:32px" src="https://ci5.googleusercontent.com/proxy/MO2mH4DfCy1aO83C5tAUmnz04QAhL1OzllCiKX0uYE8cvUF-tB-GzEyG9utvZf6OTCbpJyJc09xAlNQc0ftAjnjhEFOrIEtR5WA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/keyhole.png" class="CToWUd"></td></tr></tbody></table></td></tr><tr height="16"></tr><tr><td><table bgcolor="#4184F3" width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:332px;max-width:600px;border:1px solid #f0f0f0;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px"><tbody><tr><td height="72px" colspan="3"></td></tr><tr><td width="32px"></td><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:24px;color:#ffffff;line-height:1.25;min-width:300px"><span class="il">New</span> <span class="il">sign</span>-in from <span class="il">Chrome</span> on Windows</td><td width="32px"></td></tr><tr><td height="18px" colspan="3"></td></tr></tbody></table></td></tr><tr><td><table bgcolor="#FAFAFA" width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:332px;max-width:600px;border:1px solid #f0f0f0;border-bottom:1px solid #c0c0c0;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px"><tbody><tr height="16px"><td width="32px" rowspan="3"></td><td></td><td width="32px" rowspan="3"></td></tr><tr><td><table style="min-width:300px" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;padding-bottom:4px">Hi Sathish kumar,</td></tr><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;padding:4px 0">Your Google Account <a>sathishlxg@<span class="il">gmail</span>.com</a> was just used to <span class="il">sign</span> in from <span style="white-space:nowrap"><span class="il">Chrome</span></span> on <span style="white-space:nowrap">Windows</span>.<table border="0" cellspacing="0" cellpadding="0" style="margin-top:48px;margin-bottom:48px"><tbody><tr valign="middle"><td width="32px"></td><td align="center"><img src="https://lh3.googleusercontent.com/-gR6Xo5_uP8s/AAAAAAAAAAI/AAAAAAAAAA8/j3PshzFwl3M/s96/photo.jpg" width="48px" height="48px" style="width:48px;height:48px;display:block;border-radius:50%" class="CToWUd"></td><td width="16px"></td><td style="line-height:1.2"><span style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:20px;color:#202020">Sathish kumar Thangaraj</span><br><span style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#727272"><a>sathishlxg@<span class="il">gmail</span>.com</a></span></td></tr><tr valign="middle"><td width="32px" height="24px"></td><td align="center" height="24px"><img src="https://ci4.googleusercontent.com/proxy/wiLpWJ_Dl_RRn6k7Vwi6jZAiqrqmfnAaVjCZtPC44c_Ig3Aa6DR1PVNyUauAZ9WNY4a6FLeqgkzbTNg2nYOLZpSeUiY5tWXkSHZ5ca8=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/down_arrow.png" width="4px" height="10px" style="width:4px;height:10px;display:block" class="CToWUd"></td></tr><tr valign="top"><td width="32px"></td><td align="center"><img src="https://ci4.googleusercontent.com/proxy/umdWReY9P6SldId_97hYCQZsFbxXZbZYUsDmcRSzOU3Xj4BkyLfbPmi6FBoK5Jkxy5MvC85heeLfPQcbGX5p_Rj3YLV8il9znxG-raG-77yTDwgG_GyHon6SKf-cEYwOTQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/devices/windows_laptop_wallpaper_big.png" width="48px" height="48px" style="width:48px;height:48px;display:block" class="CToWUd"></td><td width="16px"></td><td style="line-height:1.2"><span style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:16px;color:#202020">Windows</span><br><span style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#727272">Friday, July 14, 2017 9:44 AM<br><br><span class="il">Chrome</span></span></td></tr></tbody></table><b>Don't recognize this activity?</b><br>Review your <a href="#" style="text-decoration:none;color:#4285f4" target="_blank" data-saferedirecturl="#">recently used devices</a> now.<br><br>Why are we sending this? We take security very seriously and we want to keep you in the loop on important actions in your account.<br>We were unable to determine whether you have used this browser or device with your account before. This can happen when you <span class="il">sign</span> in for the first time on a <span class="il">new</span> computer, phone or browser, when you use your browser's incognito or private browsing mode or clear your cookies, or when somebody else is accessing your account.</td></tr><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;padding-top:28px">The Google Accounts team</td></tr><tr height="16px"></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;color:#b9b9b9;line-height:1.5"><tbody><tr><td>*The location is approximate and determined by the IP address it was coming from.<br></td></tr><tr></tr></tbody></table></td></tr></tbody></table></td></tr><tr height="32px"></tr></tbody></table></td></tr><tr height="16"></tr><tr><td style="max-width:600px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#bcbcbc;line-height:1.5"></td></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#666666;line-height:18px;padding-bottom:10px"><tbody><tr><td>You received this mandatory email service announcement to update you about important changes to your Google product or account.</td></tr><tr height="6px"></tr><tr><td><div style="direction:ltr;text-align:left">© 2017 Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</div></td></tr></tbody></table></td></tr></tbody></table></td><td width="32px"></td></tr><tr height="32px"></tr></tbody></table></div></div><div class="yj6qo"></div><div class="yj6qo"></div><div class="yj6qo"></div></div><div id=":1fp" class="ii gt" style="display:none"><div id=":1fo" class="a3s aXjCH undefined"></div></div><div class="hi"></div></div>`,
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 2,
                    avatar:
                        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                    senderName: "GitHub",
                    subject: "The world's leading software development platform",
                    snippet: `GitHub brings together the world's largest community of developers to discover, share,`,
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
                    snippet: `With the increasing amount of boilerplate in modern JavaScript projects, this tool could come in very handy`,
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
                    snippet: 'Please take some time to review and agree to the new unified Terms of Service',
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
                    snippet: `We've spent more time studying user onboarding experiences than anyone else in the world.`,
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
                    snippet: `Yahoo Finance's Melody Hahm brings you up-close and personal conversations with today's`,
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
                    snippet: `Hi! It's the same weekly React newsletter you're used to, except we've had a few licks of paint and`,
                    content:
                        "Hi! It's the same weekly React newsletter you're used to, except we've had a few licks of paint and will be getting a bit more creative with the format as the year goes on.. but for now, baby steps :-)",
                    isPinned: false,
                    attachments: []
                },
                {
                    id: 10,
                    avatar: "/assets/images/fb_logo.png",
                    senderName: "Facebook",
                    snippet: 'Create an account or log into Facebook. Connect with friends, family and other people you know.',
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
