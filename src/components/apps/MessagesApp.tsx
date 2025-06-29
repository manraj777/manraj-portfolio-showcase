
import React, { useState } from 'react';
import { Send, Search, Phone, Video } from 'lucide-react';

interface MessagesAppProps {
  onClose: () => void;
}

const MessagesApp: React.FC<MessagesAppProps> = ({ onClose }) => {
  const [selectedContact, setSelectedContact] = useState('John Doe');
  const [newMessage, setNewMessage] = useState('');

  const contacts = [
    { name: 'John Doe', lastMessage: 'Hey, saw your portfolio! Looks great.', time: '2:30 PM', unread: 2 },
    { name: 'Sarah Wilson', lastMessage: 'Thanks for the quick turnaround on the project', time: '1:15 PM', unread: 0 },
    { name: 'Mike Johnson', lastMessage: 'Can we schedule a call this week?', time: '11:45 AM', unread: 1 },
    { name: 'Emily Chen', lastMessage: 'Love the new design updates!', time: 'Yesterday', unread: 0 },
  ];

  const messages = [
    { sender: 'John Doe', message: 'Hey Manraj!', time: '2:25 PM', isMe: false },
    { sender: 'Me', message: 'Hi John! How are you doing?', time: '2:26 PM', isMe: true },
    { sender: 'John Doe', message: 'Great! I saw your portfolio website. The macOS interface is really impressive!', time: '2:28 PM', isMe: false },
    { sender: 'Me', message: 'Thank you! It was a fun project to work on.', time: '2:29 PM', isMe: true },
    { sender: 'John Doe', message: 'Would love to discuss a potential collaboration. Are you available for a call this week?', time: '2:30 PM', isMe: false },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage('');
    }
  };

  return (
    <div className="h-full bg-white flex">
      {/* Sidebar */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-100 ${
                selectedContact === contact.name ? 'bg-blue-100 border-r-4 border-blue-500' : ''
              }`}
              onClick={() => setSelectedContact(contact.name)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{contact.name}</span>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                </div>
                {contact.unread > 0 && (
                  <div className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {contact.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {selectedContact.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="font-medium text-gray-900">{selectedContact}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Phone size={18} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Video size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.isMe
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesApp;
