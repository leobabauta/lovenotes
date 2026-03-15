// Each note: { id, from, body, photos }
// photos: array of { src, caption } — 4 photos per note (2 left, 2 right)
// Replace the src paths with actual photo filenames in the photos/ folder.
const NOTES = [
  {
    id: 1,
    from: "From Mom & Dad",
    photos: [
      { src: "photos/dad1.jpg", caption: "" },
      { src: "photos/dad2.JPG", caption: "" },
      { src: "photos/dad3.jpg", caption: "" },
      { src: "photos/dad4.JPG", caption: "" }
    ],
    body: `Dear Coco,

From the moment you arrived in this world, you filled our lives with a light we never knew was missing. Watching you grow into the incredible person you are today has been the greatest joy of our lives.

You are kind, brave, funny, and so deeply loved. Never forget that — no matter where life takes you, we are always cheering you on.

Happy birthday, sweet girl. We love you more than words could ever say.

With all our love,
Mom & Dad`
  },
  {
    id: 2,
    from: "From Your Little Brother",
    photos: [
      { src: "photos/bro1.jpg", caption: "" },
      { src: "photos/bro2.jpg", caption: "" },
      { src: "photos/bro3.jpg", caption: "" },
      { src: "photos/bro4.jpg", caption: "" }
    ],
    body: `Hey Coco,

I know I don't say it enough, but you're the best big sister anyone could ask for. You always looked out for me, even when I was being annoying (which was probably a lot).

You taught me what it means to be brave and to stand up for what matters. I'm so proud to be your brother.

Love you always,
Your Little Bro`
  },
  {
    id: 3,
    from: "From Grandma",
    photos: [
      { src: "photos/grandma1.jpg", caption: "" },
      { src: "photos/grandma2.jpg", caption: "" },
      { src: "photos/grandma3.jpg", caption: "" },
      { src: "photos/grandma4.jpg", caption: "" }
    ],
    body: `My dearest Chloe,

Every time I see your smile, I see the little girl who used to sit on my lap and ask me to tell her "just one more story." You still have that same sparkle in your eyes.

You carry so much love in your heart, and the world is better because you're in it. I thank God for you every single day.

All my love and kisses,
Grandma`
  },
  {
    id: 4,
    from: "From Your Big Sister",
    photos: [
      { src: "photos/sis1.jpg", caption: "" },
      { src: "photos/sis2.jpg", caption: "" },
      { src: "photos/sis3.jpg", caption: "" },
      { src: "photos/sis4.jpg", caption: "" }
    ],
    body: `Coco!

Where do I even start? You're my best friend, my partner in crime, and the person who always makes me laugh the hardest.

Remember all those late nights talking about everything and nothing? Those are some of my favorite memories. I'm so lucky to have you as my sister.

Love you to the moon and back,
Your Big Sis`
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    from: "From the Whole Family",
    photos: [
      { src: "photos/family1.jpg", caption: "" },
      { src: "photos/family2.jpg", caption: "" },
      { src: "photos/family3.jpg", caption: "" },
      { src: "photos/family4.jpg", caption: "" }
    ],
    body: `Dear Coco,

This is a love note from ALL of us — every single person in this family adores you.

You bring people together. You make the holidays brighter, the dinners louder (in the best way), and the hard times easier just by being there.

33 looks amazing on you. Here's to many, many more years of love, laughter, and being unapologetically YOU.

With all the love in our hearts,
Your Family`
  }
];
