import DS from 'ember-data';

var message = DS.Model.extend({
  avatar: DS.attr("string"),
  senderName: DS.attr("string"),
  subject: DS.attr("string"),
  content: DS.attr("string"),
  attachments: DS.hasMany("file" , { embedded: 'always' }),
});

message.reopenClass({
    FIXTURES: [
        {
          id: 1,
          avatar: "https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg",
          senderName: "Sathish kumar Thangaraj",
          subject: "FW: Jobs to Apply for",
          content: "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width.",
          hasAttachements: true,
          hasPictures: true,
          attachments: [
            {
              fileName: "Design document v1.0",
              fileType: "document",
              ext: ".docx",
              url: "https://google.com"
            },
            {
              fileName: "Phone Bill",
              fileType: "document",
              ext: ".xlsx",
              url: "https://google.com"
            },
            {
              fileName: "EL245675326US",
              fileType: "document",
              ext: ".pdf",
              url: "https://google.com"
            },
            {
              fileName: "Sathish",
              fileType: "image",
              ext: ".jpeg",
              url: "https://google.com"
            }
          ]
        },
        {
          id: 2,
          avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_a_56.png",
          senderName: "Alex",
          subject: "Saregama Tamil",
          content: "Watch the peppy love song Mascara Pottu sung by Vijay Antony & Supriya Joshi from the action cum romantic flick Salim.",
          hasVideos: true
        },
        {
          id: 3,
          avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_g_56.png",
          senderName: "Google",
          subject: "New sign-in from Chrome on Windows",
          content: "Hi Sathish kumar, Your Google Account sathishlxg@gmail.com was",
        },
        {
          id: 4,
          avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
          senderName: "Max",
          subject: "Buffalo boy",
          content: "Once in your life time you will truly come across someone",
          hasAttachements: true
        }
    ]
});

export default message;