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
    count: 53,
    weight: 533,
    averageWeight: 455,
    pricePer: 4150,
    variant: 'Heifer',
    price: 9950,
    updatedAt: 'timestamp',
  },
  bidBoard: {
    recentBidder: {
      fullName: '-',
      userId: 60,
      createdAt: 'timestamp'
    },
    price: 0
  },
  bidLog: [{
    userId: 515,
    fullName: 'Dan Abramov',
    amount: 31550,
    createdAt: 'timestamp',
  }, {
    userId: 175,
    fullName: 'Freddy Mercury',
    amount: 44799,
    createdAt: 'timestamp',
  }],
  recentBidder: {
    userId: 515,
    fullName: 'Dan Abramov',
    buyerNumber: 'foo_153',
    createdAt: 'timestamp',
    amount: 10022,
  },
  // Not needed. Will reduce bidLog
  //bidLogByUserId: {
  //  515: [{},{},{}],
  //  451: [...{}],
  //},
  messagesByUserId: {
    515: [{
      id: 0,
      authorName: 'Dan Abramov',
      text: 'Can I pay with bitcoin?',
      createdAt: 'timestamp',
    }, {
      id: 1,
      authorName: 'Auctioneer',
      text: 'Yes, we accept bitcoin.',
      createdAt: 'timestamp',
    }],
    175: [{},{}]
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
  loggedInUserIds: [515, 175],
  biddersByUserId: {
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
  },
  isConnectionStatusOk: true,
  errors: [{
    msg: ''
  }]
}
