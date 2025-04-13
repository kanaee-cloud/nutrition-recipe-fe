"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Bot, User, Send, ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";


const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! What would you like to cook today?",
    timestamp: "2:30 PM"
  },
  {
    id: 2,
    sender: "user",
    text: "I have chicken and vegetables in my fridge.",
    timestamp: "2:31 PM"
  },
  {
    id: 3,
    sender: "bot",
    text: "Great! I'd recommend a stir-fry. It's quick and healthy. Would you like a recipe for that?",
    timestamp: "2:31 PM"
  },
  {
    id: 4,
    sender: "user",
    text: "Yes, please!",
    timestamp: "2:32 PM"
  },
  {
    id: 5,
    sender: "bot",
    text: "Here's a simple chicken stir-fry recipe:\n\n1. Slice 2 chicken breasts into strips\n2. Chop your vegetables (bell peppers, broccoli, carrots)\n3. Heat 2 tbsp oil in a wok or large pan\n4. Cook chicken until no longer pink\n5. Add vegetables and stir-fry for 5 minutes\n6. Add 3 tbsp soy sauce and 1 tbsp honey\n7. Serve over rice\n\nWould you like more details on any step?",
    timestamp: "2:33 PM"
  }
];

const features = [
  {
    title: "Personalized Recommendations",
    description: "Get recipe suggestions based on ingredients you already have."
  },
  {
    title: "Step-by-Step Guidance",
    description: "Receive clear instructions tailored to your cooking level."
  },
  {
    title: "Dietary Adaptations",
    description: "Easily modify recipes to suit dietary restrictions or preferences."
  },
  {
    title: "Real-time Assistance",
    description: "Ask questions during cooking and get immediate answers."
  }
];

const ChatMessage = ({ message }) => {
  const isBot = message.sender === "bot";
  
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div className={`flex ${isBot ? "flex-row" : "flex-row-reverse"} max-w-[80%]`}>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${isBot ? "bg-blue-500" : "bg-green-500"} text-white mr-2 ${isBot ? "mr-2" : "ml-2"}`}>
          {isBot ? <Bot size={16} /> : <User size={16} />}
        </div>
        <div className={`p-3 rounded-lg ${isBot ? "bg-blue-100 text-gray-800" : "bg-green-100 text-gray-800"}`}>
          <p className="whitespace-pre-line">{message.text}</p>
          <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default function AIChatSection() {
  const [chatMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="py-20 bg-gradient-to-b from-[#051853] to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Your AI Kitchen Assistant
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the future of cooking with our intelligent chat assistant that helps you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white rounded-lg shadow-xl overflow-hidden border-0">
              <div className="bg-blue-600 p-4 text-white">
                <div className="flex items-center">
                  <Bot className="mr-2" size={24} />
                  <h3 className="font-medium">Recipe Assistant</h3>
                  <Badge variant="outline" className="ml-2 text-xs border-white/30 text-white">Online</Badge>
                </div>
              </div>
              
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                  {chatMessages.map(message => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center">
                    <Input
                      placeholder="Ask anything about cooking..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button 
                      className="rounded-l-none bg-blue-600 hover:bg-blue-700"
                    >
                      <Send size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-2xl font-medium mb-6">How Our AI Helps You Cook Better</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <ArrowRight className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              Try It Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}