import React, { useState } from 'react';
import { Book, Users, Quote, ThumbsUp, ChevronRight, ChevronLeft, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

interface Character {
  name: string;
  description: string;
  color: string;
  imageUrl: string;
}

interface Section {
  title: string;
  icon: React.ReactElement<LucideIcon>;
  content: React.ReactNode;
}

const MidsummerGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const sections: Section[] = [
    {
      title: "Plot Summary",
      icon: <Book className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            In Athens, four young lovers find themselves entangled in a magical forest adventure. Hermia and Lysander plan to elope since Hermia's father wants her to marry Demetrius. Meanwhile, Helena pines for Demetrius, who only has eyes for Hermia.
          </p>
          <p className="text-lg">
            The plot thickens when they enter a mysterious forest where fairy king Oberon and queen Titania are feuding. Oberon's mischievous servant Puck uses a love potion that goes awry, causing chaos among the lovers and accidentally making Titania fall in love with Bottom - a weaver whose head has been transformed into that of a donkey.
          </p>
          <p className="text-lg">
            A group of amateur actors, including Bottom, rehearsing a play for the duke's wedding also gets caught up in the magical mishaps. After much confusion and comedy, Oberon sets things right, the correct couples unite, and all ends happily with three weddings and the amateur players performing their hilariously bad play.
          </p>
        </div>
      )
    },
    {
      title: "Characters",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {([
            {
              name: "Puck (Robin Goodfellow)",
              description: "A mischievous fairy who serves Oberon and causes much of the play's confusion with the love potion.",
              color: "bg-green-900",
              imageUrl: "https://hollowtreetales.wordpress.com/wp-content/uploads/2009/09/goodfellow.jpg?w=490"
            },
            {
              name: "Oberon",
              description: "The king of the fairies who plots to teach Titania a lesson but also helps the human lovers.",
              color: "bg-blue-900",
              imageUrl: "https://pbs.twimg.com/media/F-4_U6rXQAAwp0P?format=jpg&name=large"
            },
            {
              name: "Titania",
              description: "The proud fairy queen who falls in love with Bottom while under the influence of a spell.",
              color: "bg-purple-900",
              imageUrl: "https://static.zerochan.net/Fate.Grand.Order.full.3433216.jpg"
            },
            {
              name: "Hermia",
              description: "A young woman who loves Lysander but is ordered by her father to marry Demetrius.",
              color: "bg-pink-900",
              imageUrl: "https://preview.redd.it/main-family-greek-gods-anime-style-v0-qb4i1v0i9mrb1.jpg?width=640&crop=smart&auto=webp&s=a4dad6f43447f3a91137e51ae6730ba7fd975d04"
            },
            {
              name: "Lysander",
              description: "In love with Hermia, he elopes with her into the forest to escape Athenian law.",
              color: "bg-yellow-900",
              imageUrl: "https://ichef.bbci.co.uk/images/ic/480x270/p0824xss.jpg"
            },
            {
              name: "Bottom",
              description: "A weaver and amateur actor who gets transformed into a donkey and becomes the object of Titania's affection.",
              color: "bg-orange-900",
              imageUrl: "https://media.istockphoto.com/id/1473954996/photo/domestic-and-farm-animals.jpg?s=612x612&w=0&k=20&c=QlsIZEDiwK1j4xkmWu1D0ndeL-vOr6xfmfb07vsqHLg="
            }
          ] as Character[]).map(char => (
            <Card
              key={char.name} 
              className="group relative overflow-hidden h-64 transition-all hover:scale-105"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${char.imageUrl})`,
                  backgroundBlendMode: 'overlay'
                }}
              />
              <div className={`absolute inset-0 ${char.color} opacity-60 transition-opacity duration-300 group-hover:opacity-90`} />
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-bold text-white shadow-sm">
                    {char.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-white/90">
                    {char.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )
    },
    {
      title: "Notable Quote",
      icon: <Quote className="w-6 h-6" />,
      content: (
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Lord, what fools these mortals be!</CardTitle>
            <CardDescription className="text-gray-300">- Puck, Act III, Scene II</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              This famous quote captures the play's central theme of how love makes people behave foolishly. Puck observes the chaos caused by the love potion and the humans' romantic confusion with amusement, highlighting the comedy in human nature and our susceptibility to love's influence.
            </p>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Recommendation",
      icon: <ThumbsUp className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-xl font-semibold">
            If you loved the magical romance of "Twilight" or the enchanted worlds of "Harry Potter," you'll be captivated by A Midsummer Night's Dream!
          </p>
          <p className="text-lg">
            This timeless comedy blends supernatural elements, romantic complications, and humor in a way that feels surprisingly modern. With fairies, love potions, and magical transformations, it's the original fantasy romance that has inspired countless stories over the centuries.
          </p>
        </div>
      )
    }
  ];

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="midsummer-guide max-w-4xl mx-auto p-6 space-y-8 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-purple-400">A Midsummer Night's Dream</h1>
        <p className="text-xl text-gray-300">An Interactive Guide to Shakespeare's Magical Comedy</p>
      </header>

      <nav className="flex justify-center space-x-4">
        {sections.map((section, index) => (
          <button
            key={section.title}
            onClick={() => setActiveSection(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
              ${activeSection === index 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 hover:bg-purple-900 text-gray-200'
              }`}
          >
            {section.icon}
            <span>{section.title}</span>
          </button>
        ))}
      </nav>

      <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 text-white">
        <button 
          onClick={prevSection}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-900 hover:bg-purple-800"
        >
          <ChevronLeft className="text-white" />
        </button>
        
        <div className="px-8">
          {sections[activeSection].content}
        </div>

        <button 
          onClick={nextSection}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-900 hover:bg-purple-800"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MidsummerGuide;