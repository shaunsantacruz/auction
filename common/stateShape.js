// For Reference only
const server_state = {
  auction: {
    id: 56,
    name: 'My auction',
    type: 'cattle',
    mediaType: 'video',
    createdAt: 'timestamp',
    endedAt: 'timestamp',
    ownerId: 1467,
  },
  bidItem: {
    id: 1,
    name: '',
    headCount: 53,
    weight: 533,
    averageWeight: 455,
    pricePer: 4150,
    variant: 'Heifer',
    price: 9950,
    updatedAt: 'timestamp',
  },
  bidBoard: {
    price: 0,
    recentBidder: {
      fullName: '-',
      userId: 60,
      createdAt: 'timestamp'
    },
    tieBidsUserIds: [],
    onDeck: {},
  },
  bidLog: [{
    userId: 515,
    fullName: 'Paul Irish',
    amount: 31550,
    buyerNumber: 'foo_123',
    createdAt: 'timestamp',
  }, {
    userId: 175,
    fullName: 'Freddy Mercury',
    amount: 44799,
    buyerNumber: 'foo_123',
    createdAt: 'timestamp',
  }],
  currentBidLog: [{
    userId: 515,
    fullName: 'Dan Abramov',
    amount: 31550,
    buyerNumber: 'foo_123',
    createdAt: 'timestamp',
  }, {
    userId: 175,
    fullName: 'Freddy Mercury',
    amount: 44799,
    buyerNumber: 'foo_123',
    createdAt: 'timestamp',
  }],
  chat: {
    isLobbyOpen: false,
    mutedUserIds: [515, 450, 25],
    unreadMessagesUserIds: [515, 450, 25],
    messages: [
      {
        authorName: 'Auctioneer',
        authorRole: 'broadcaster',
        channelId: 'lobby',
        text: 'Get into a flow and focus.',
        createdAt: 'timestamp',
        userId: 515
      },
      {
        authorName: 'Auctioneer',
        authorRole: 'broadcaster',
        channelId: 'lobby',
        text: 'Chop, chop em down!',
        createdAt: 'timestamp',
        userId: 520
      }
    ],
    messagesByChannelId: {
      515: [{
        authorName: 'Auctioneer',
        authorRole: 'broadcaster',
        channelId: 515,
        userId: 210, // broadcaster id
        text: 'Can you pay with bitcoin?',
        createdAt: 'timestamp',
      }, {
        authorName: 'Dan Abramov',
        authorRole: 'bidder',
        channelId: 515,
        userId: 515,
        text: 'Yes, I can pay with bitcoin.',
        createdAt: 'timestamp',
      }],
      175: [{}, {}]
    }
  },
  user: {
    id: 515,
    fullName: 'Dan Abramov',
    firstName: 'Dan',
    lastName: 'Abromov',
    email: 'dan@awesomesauce.com',
    city: 'New York',
    state: 'NY',
    buyerNumber: 'foo_125',
    role: 'bidder'
  },
  users: {
    selectedUserId: 515,
    loggedInIds: [515, 175],
    byId: {
      515: {
        id: 515,
        fullName: 'Dan Abramov',
        firstName: 'Dan',
        lastName: 'Abromov',
        state: 'NY',
        buyerNumber: 'foo_125',
      },
      175: {
        //
      }
    }
  },
  isConnectionStatusOk: true,
  errors: [{
    msg: ''
  }]
}
