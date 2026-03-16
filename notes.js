// Each note: { id, from, body, photos }
// photos: array of { src, caption } — 4 photos per note (2 left, 2 right)
const NOTES = [
  {
    id: 1,
    from: "From Auntie An An",
    photos: [
      { src: "photos/ana1.jpg", caption: "" },
      { src: "photos/ana2.jpg", caption: "" },
      { src: "photos/ana3.jpg", caption: "" },
      { src: "photos/ana4.JPG", caption: "" }
    ],
    body: `To my Dearest Coco,

You were my first baby love. And taught me how to love someone other than myself. Thank you for allowing me to be your auntie and one of your biggest fans.

It's been so fun to watch you grow into the woman you are today. You are bright, beautiful, hilarious, thoughtful, and light up any room you walk into.

I love watching your journey online, and how you're developing your presence on TikTok. I will like, comment, and share every post to boost your presence. I think anyone would be lucky to follow you.

Please keep up all the hard work you are doing in the world. Keep up with the traveling and building a beautiful home for you and your family. But most of all, don't forget to rest and take care of your mental and physical health- it's of utmost importance!

I will always be your ally, your girl, in your corner. You can count on me for anything, and everything. Always and forever. I love you my baby Coco.

Love,
Auntie An An`
  },
  {
    id: 2,
    from: "From Maia",
    photos: [
      { src: "photos/maia1.jpg", caption: "" },
      { src: "photos/maia2.JPG", caption: "" },
      { src: "photos/maia3.JPG", caption: "" },
      { src: "photos/maia4.jpg", caption: "" }
    ],
    body: `Dear Chloe,

Happy Birthday! I just wanted to tell you how much you mean to me. I am constantly grateful for the support and advice you've given me over the years, as well as the example you've set for me; watching you grow and tackle the world has really guided me when it comes to tackling it myself. I know that we don't get to spend every day together, but you are always with me in the back of my mind when I face challenges or when I hear a funny joke.

I'm so happy to have the privilege of growing up your younger sister! You've brought so much light and fun to my life, taught me about relationships and people, and shown me that I can absolutely do whatever I want to do in this crazy life.

Love you forever and ever!!

-Maia`
  },
  {
    id: 3,
    from: "From Noelle",
    photos: [
      { src: "photos/noelle1.JPG", caption: "" },
      { src: "photos/noelle2.jpg", caption: "" },
      { src: "photos/noelle3.png", caption: "" },
      { src: "photos/noelle4.png", caption: "" }
    ],
    body: `Dear Coco,

I am so delighted I can call you my big sister. For my whole life, you've been my role model. You have given me confidence to be unapologetically who I am. You've shown me immense love and support, and have always been there when I need you. You've helped me grow into a strong young woman and I am forever grateful for all your advice and help throughout my entire life.

I remember when the family was living in San Francisco and you gave me a hello kitty journal to write down my thoughts and feelings. That was my first journal, and I filled it with childhood memories and drawings. You wrote a little note on the inside saying how you love to journal, and how it could benefit me. The journal helped me when I was a kid to regulate my emotions. It gave me an outlet to just let out all my thoughts without fear of judgement. I still occasionally open up my old hello kitty journal and laugh and cry about the things I wrote in it. Thank you for giving me something that I have always cherished, and showing me a way to express my emotions.

I love you so much, happy birthday to my big sister \u2764\uFE0F`
  },
  {
    id: 4,
    from: "From Rain",
    photos: [
      { src: "photos/rain1.jpg", caption: "" },
      { src: "photos/rain2.JPG", caption: "" },
      { src: "photos/rain3.png", caption: "" },
      { src: "photos/rain4.png", caption: "" }
    ],
    body: `I keep thinking about how we both cherish our cats in the same way. When you last visited and we talked about time traveling to our future selves and appreciating the moment for them, I felt like it was such a strange and hard to explain concept but you do the exact same thing. I don't remember ever talking about that with you or anyone before but we still somehow started doing it on our own, separately.

I love that our minds work in such strange yet similar ways. It makes me feel like no matter how weird or confusing of a thought or idea I have I can at least talk to you about it and you'll understand. For example: meow meow meow meow meow. You get it right?`
  },
  {
    id: 5,
    from: "From Isaiah",
    photos: [
      { src: "photos/isaiah1.jpg", caption: "" },
      { src: "photos/isaiah2.JPG", caption: "" },
      { src: "photos/isaiah3.jpg", caption: "" },
      { src: "photos/isaiah4.jpg", caption: "" }
    ],
    body: `Dear Coco,

I have learned so much from you. In a lot of ways I can claim success largely from the advice and support you've given me. You were always able to look at my struggle and show me how to get back up. You have taught me to be more thoughtful, to be more empathetic, and (perhaps most importantly) to be gentler with myself. I always know I'll have shelter with you, my oldest sister.

Thank you for everything.
Love, Isaiah`
  },
  {
    id: 6,
    from: "From Dad",
    photos: [
      { src: "photos/dad1.jpg", caption: "" },
      { src: "photos/dad2.JPG", caption: "" },
      { src: "photos/dad3.jpg", caption: "" },
      { src: "photos/dad4.JPG", caption: "" }
    ],
    body: `My love,

I can't tell you enough how proud I am of you, of your huge heart, of your courage and beauty and sweetness and insight and wisdom and resilience. Of what a great friend and sister and daughter and creator you are. Of how much you've honored yourself and your journey.

But I also want to say how much I love hanging with you — you're so fun, funny, and loving. I think of you dancing and rapping to Doja Cat, or making fun of Nate, or joking around with your siblings. I can't tell you how meaningful it's been to be your dad all these years, and how much you changed me, coming into my life.

I love you - Dad`
  },
  {
    id: 7,
    from: "From Nate",
    photos: [
      { src: "photos/nate1.jpg", caption: "" },
      { src: "photos/nate2.jpg", caption: "" },
      { src: "photos/nate3.png", caption: "" },
      { src: "photos/nate4.jpg", caption: "" }
    ],
    body: `Happy birthday to my favorite person in the world! You have filled my life with love and joy ever since we met in college. I cherish all of our memories together\u2014from you interrupting me in our English final in front of the whole class, to living together in Guam, and to having our own home with two awesome cats. I can\u2019t think of anyone else I\u2019d rather spend the rest of my life with and I can\u2019t wait to see what other memories we make. Happy birthday and I love you!!`
  },
  {
    id: 8,
    from: "From Justin",
    photos: [
      { src: "photos/justin1.jpg", caption: "" },
      { src: "photos/jusstin2.JPG", caption: "" },
      { src: "photos/justin3.jpg", caption: "" },
      { src: "photos/justin4.jpg", caption: "" }
    ],
    body: `Happy Birthday Chloe!!!

World's #1 older sister! I was just looking at old pictures of the six of us and it's so crazy that we were ever that cute. We're always missing you whenever we're together - it never feels quite like we're a complete set without you there. It's so cool to have a cool, chic, artistic, but also relatable older sister that is always in your corner, and it's so meaningful that we can always feel that support because of how you treat us and talk to us. I personally feel so lucky to have you as an example and role model. I'm sure it can be exhausting at times, but you've always killed it. I don't say it enough (or ever), but you're truly an inspiration. Not to mention you give great advice, which I appreciate more and more as I get older myself. I hope 33 is good to you, because you deserve it as much as anyone I know. Love you!

- Justin`
  }
];
