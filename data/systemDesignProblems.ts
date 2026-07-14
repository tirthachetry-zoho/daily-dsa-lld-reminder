export interface SystemDesignProblemItem {
  title: string;
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  topic?: string;
  companies?: string[];
  leetcodeUrl?: string;
  description?: string;
  primaryUrl?: string;
  solutionUrl?: string;
  youtubeUrl?: string;
}

export const systemDesignProblems: SystemDesignProblemItem[] = [
  {
    "title": "Design a Parking Lot System",
    "description": "Model a multi-level parking lot supporting different vehicle types, spot allocation strategy, and fee calculation.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/parkinglot",
    "youtubeUrl": "https://www.youtube.com/results?search_query=parking+lot+low+level+design"
  },
  {
    "title": "Design an Elevator System",
    "description": "Design elevator scheduling for a single or multi-elevator building, handling requests, direction, and state.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/elevatorsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=elevator+system+low+level+design"
  },
  {
    "title": "Design a Library Management System",
    "description": "Model books, members, borrowing/returning, fines, and catalog search.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/librarymanagementsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=library+management+system+low+level+design"
  },
  {
    "title": "Design a Chess Game",
    "description": "Model the board, pieces, move validation, turns, check/checkmate detection.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/chess",
    "youtubeUrl": "https://www.youtube.com/results?search_query=chess+game+low+level+design"
  },
  {
    "title": "Design Tic Tac Toe",
    "description": "Model a two-player grid game with win/draw detection; extend to an NxN board.",
    "primaryUrl": "https://leetcode.com/problems/design-tic-tac-toe/",
    "solutionUrl": "https://leetcode.com/problems/design-tic-tac-toe/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+tic+tac+toe+leetcode"
  },
  {
    "title": "Design Snake and Ladder Game",
    "description": "Model the board, dice roll, snakes/ladders, and multiplayer turn logic.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/snakeandladder",
    "youtubeUrl": "https://www.youtube.com/results?search_query=snake+and+ladder+low+level+design"
  },
  {
    "title": "Design an LRU Cache",
    "description": "Implement O(1) get/put cache with least-recently-used eviction using a hashmap + doubly linked list.",
    "primaryUrl": "https://leetcode.com/problems/lru-cache/",
    "solutionUrl": "https://leetcode.com/problems/lru-cache/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=lru+cache+design+leetcode"
  },
  {
    "title": "Design a Rate Limiter",
    "description": "Design token bucket / sliding window rate limiter for API throttling per client.",
    "primaryUrl": "https://github.com/ashishps1/awesome-system-design-resources",
    "solutionUrl": "https://github.com/ashishps1/awesome-system-design-resources",
    "youtubeUrl": "https://www.youtube.com/results?search_query=rate+limiter+low+level+design"
  },
  {
    "title": "Design a URL Shortener (TinyURL)",
    "description": "Design a service like TinyURL or bit.ly that shortens long URLs into short, unique aliases.",
    "primaryUrl": "https://leetcode.com/problems/encode-and-decode-tinyurl/",
    "solutionUrl": "https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+tinyurl+low+level+design"
  },
  {
    "title": "Design a Movie Ticket Booking System (BookMyShow)",
    "description": "Model theatres, shows, seat locking/booking, and payment flow with concurrency-safe seat selection.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/movieticketbookingsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=bookmyshow+low+level+design"
  },
  {
    "title": "Design an ATM Machine",
    "description": "Model card authentication, PIN validation, withdrawal, balance check, and cash dispensing states.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/atm",
    "youtubeUrl": "https://www.youtube.com/results?search_query=atm+machine+low+level+design"
  },
  {
    "title": "Design a Vending Machine",
    "description": "Model inventory, coin/note insertion, item selection, change return using a state machine.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/vendingmachine",
    "youtubeUrl": "https://www.youtube.com/results?search_query=vending+machine+low+level+design"
  },
  {
    "title": "Design Splitwise (Expense Sharing App)",
    "description": "Model users, groups, expenses, and simplify-debts algorithm to settle balances.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/splitwise",
    "youtubeUrl": "https://www.youtube.com/results?search_query=splitwise+low+level+design"
  },
  {
    "title": "Design an Uber / Ride-Sharing System",
    "description": "Model riders, drivers, matching, pricing, and trip lifecycle.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/ridesharingservice",
    "youtubeUrl": "https://www.youtube.com/results?search_query=uber+low+level+design"
  },
  {
    "title": "Design an E-commerce System (Amazon-lite)",
    "description": "Model products, cart, orders, inventory, and checkout flow.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/onlineshoppingsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=ecommerce+low+level+design"
  },
  {
    "title": "Design a Food Delivery App (Swiggy/Zomato)",
    "description": "Model restaurants, menus, orders, delivery partner assignment, and order tracking.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=food+delivery+app+low+level+design"
  },
  {
    "title": "Design a Hotel Booking System",
    "description": "Model hotels, room types, availability, reservations, and cancellation policy.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/hotelbookingsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=hotel+booking+system+low+level+design"
  },
  {
    "title": "Design a Restaurant Management System",
    "description": "Model tables, reservations, orders, kitchen queue, and billing.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/restaurantmanagementsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=restaurant+management+system+low+level+design"
  },
  {
    "title": "Design an Airline Management System",
    "description": "Model flights, seat classes, bookings, and cancellation/refund workflow.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/airlinemanagementsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=airline+management+system+low+level+design"
  },
  {
    "title": "Design a Car Rental System",
    "description": "Model vehicle inventory, reservations, pricing tiers, and return/damage handling.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/carrentalsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=car+rental+system+low+level+design"
  },
  {
    "title": "Design a Logging Framework",
    "description": "Design a pluggable logger supporting log levels, multiple sinks (file/console), and formatting (Chain of Responsibility / Strategy patterns).",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/loggingframework",
    "youtubeUrl": "https://www.youtube.com/results?search_query=logging+framework+low+level+design"
  },
  {
    "title": "Design a Notification System",
    "description": "Design a multi-channel (SMS/email/push) notification service using Observer pattern and templates.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/notificationservice",
    "youtubeUrl": "https://www.youtube.com/results?search_query=notification+system+low+level+design"
  },
  {
    "title": "Design a Chat Application (WhatsApp)",
    "description": "Model users, one-to-one and group messaging, message status, and delivery.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/chatapplication",
    "youtubeUrl": "https://www.youtube.com/results?search_query=whatsapp+low+level+design"
  },
  {
    "title": "Design an In-Memory File System",
    "description": "Support mkdir, addContentToFile, readContentFromFile, and ls using a trie/tree structure.",
    "primaryUrl": "https://leetcode.com/problems/design-in-memory-file-system/",
    "solutionUrl": "https://leetcode.com/problems/design-in-memory-file-system/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+in+memory+file+system+leetcode"
  },
  {
    "title": "Design an In-Memory Key-Value Store",
    "description": "Design a Redis-like store supporting get/set/expire with TTL eviction.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=in+memory+key+value+store+design"
  },
  {
    "title": "Design a Text Editor with Undo/Redo",
    "description": "Model text buffer operations with Command pattern to support undo/redo stacks.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=text+editor+undo+redo+design"
  },
  {
    "title": "Design a Cache with Multiple Eviction Policies",
    "description": "Design a cache supporting pluggable eviction strategies (LRU, LFU, FIFO) via Strategy pattern.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=cache+eviction+policy+low+level+design"
  },
  {
    "title": "Design a Traffic Signal Control System",
    "description": "Model intersection signals, timing cycles, and pedestrian/emergency overrides.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=traffic+signal+control+system+design"
  },
  {
    "title": "Design an Elevator Scheduling Algorithm",
    "description": "Extend basic elevator design to optimize request scheduling across multiple cars (SCAN/LOOK algorithms).",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/elevatorsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=elevator+scheduling+algorithm+design"
  },
  {
    "title": "Design a Meeting Scheduler / Calendar App",
    "description": "Model events, attendees, availability checking, and conflict detection.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=meeting+scheduler+calendar+low+level+design"
  },
  {
    "title": "Design a Task Scheduler / Job Scheduler",
    "description": "Design a cron-like job scheduler supporting recurring jobs, priorities, and retries.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=job+scheduler+low+level+design"
  },
  {
    "title": "Design an Online Auction System",
    "description": "Model auctions, bids, bid validation, and auto-close/winner determination.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=online+auction+system+low+level+design"
  },
  {
    "title": "Design a Stock Exchange / Trading System",
    "description": "Model order book, buy/sell matching engine, and trade execution.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/stockexchange",
    "youtubeUrl": "https://www.youtube.com/results?search_query=stock+exchange+order+matching+low+level+design"
  },
  {
    "title": "Design an ATM Cash Dispenser (Denomination Logic)",
    "description": "Design the algorithm and class structure for dispensing minimum notes/coins for a withdrawal amount.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/atm",
    "youtubeUrl": "https://www.youtube.com/results?search_query=cash+dispenser+denomination+design"
  },
  {
    "title": "Design a Coffee Vending Machine",
    "description": "Model recipes, ingredient inventory, and a state machine for beverage preparation.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/vendingmachine",
    "youtubeUrl": "https://www.youtube.com/results?search_query=coffee+vending+machine+low+level+design"
  },
  {
    "title": "Design a Blackjack Card Game",
    "description": "Model deck, dealer/player hands, hit/stand logic, and scoring rules.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=blackjack+card+game+low+level+design"
  },
  {
    "title": "Design a Generic Deck of Cards",
    "description": "Model a reusable Card/Deck/Shuffle abstraction usable across multiple card games.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=deck+of+cards+low+level+design"
  },
  {
    "title": "Design Tic-Tac-Toe with a Simple AI Opponent",
    "description": "Extend Tic-Tac-Toe with a minimax-based computer player.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=tic+tac+toe+minimax+design"
  },
  {
    "title": "Design a Library Book Reservation & Hold System",
    "description": "Extend library system with reservation queues and hold-expiry notifications.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/librarymanagementsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=library+reservation+system+low+level+design"
  },
  {
    "title": "Design an Airport / Flight Booking System",
    "description": "Model airports, flights, seat inventory, and multi-leg itinerary booking.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/airlinemanagementsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=flight+booking+system+low+level+design"
  },
  {
    "title": "Design a School / University Management System",
    "description": "Model students, courses, enrollment, grading, and faculty assignment.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=school+management+system+low+level+design"
  },
  {
    "title": "Design an Inventory Management System",
    "description": "Model warehouses, SKUs, stock levels, reordering thresholds, and audit logs.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=inventory+management+system+low+level+design"
  },
  {
    "title": "Design a Shopping Cart System",
    "description": "Model cart operations, quantity updates, coupon application, and price recalculation.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/onlineshoppingsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=shopping+cart+low+level+design"
  },
  {
    "title": "Design a Payment Gateway / Digital Wallet",
    "description": "Model payment methods, transaction lifecycle, idempotency, and rollback on failure.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=payment+gateway+wallet+low+level+design"
  },
  {
    "title": "Design a Social Media News Feed",
    "description": "Model posts, followers, feed generation (pull vs push), and ranking.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=news+feed+system+low+level+design"
  },
  {
    "title": "Design Twitter (LLD)",
    "description": "Model tweets, follow graph, timeline generation, and like/retweet actions.",
    "primaryUrl": "https://leetcode.com/problems/design-twitter/",
    "solutionUrl": "https://leetcode.com/problems/design-twitter/solutions/",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+twitter+low+level+design"
  },
  {
    "title": "Design Instagram (LLD)",
    "description": "Model users, posts, stories, follow relationships, and feed ranking.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=design+instagram+low+level+design"
  },
  {
    "title": "Design a Rate Limiter (Token Bucket vs Sliding Window)",
    "description": "Compare and implement token bucket, leaky bucket, and sliding-window-log rate limiting strategies.",
    "primaryUrl": "https://github.com/ashishps1/awesome-system-design-resources",
    "solutionUrl": "https://github.com/ashishps1/awesome-system-design-resources",
    "youtubeUrl": "https://www.youtube.com/results?search_query=token+bucket+rate+limiter+design"
  },
  {
    "title": "Design a Circuit Breaker",
    "description": "Model open/half-open/closed states to protect a system from cascading failures.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=circuit+breaker+pattern+low+level+design"
  },
  {
    "title": "Design a Pub-Sub System",
    "description": "Model publishers, subscribers, topics, and message delivery guarantees.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=pub+sub+system+low+level+design"
  },
  {
    "title": "Design an Event Booking / Ticketing System",
    "description": "Model events, venues, ticket tiers, and concurrent booking with seat/inventory locks.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/movieticketbookingsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=event+ticketing+system+low+level+design"
  },
  {
    "title": "Design a Cricket / Match Scoring System",
    "description": "Model innings, overs, balls, player stats, and live score updates.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=cricket+scoring+system+low+level+design"
  },
  {
    "title": "Design a Voting / Polling System",
    "description": "Model polls, options, one-vote-per-user enforcement, and real-time result tallying.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=voting+polling+system+low+level+design"
  },
  {
    "title": "Design a Digital Wallet with Ledger",
    "description": "Model wallet balance, transaction ledger, and double-entry consistency across transfers.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=digital+wallet+ledger+low+level+design"
  },
  {
    "title": "Design a Ride-Fare Calculator",
    "description": "Model base fare, distance/time surcharges, and dynamic (surge) pricing rules.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/ridesharingservice",
    "youtubeUrl": "https://www.youtube.com/results?search_query=ride+fare+calculator+low+level+design"
  },
  {
    "title": "Design a Multiplayer Game Lobby / Matchmaking System",
    "description": "Model rooms, player queueing, skill-based matchmaking, and lobby lifecycle.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=matchmaking+system+low+level+design"
  },
  {
    "title": "Design an Elevator System with Multiple Cars",
    "description": "Extend elevator design to dispatch among multiple cars for optimal wait time.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/src/main/java/elevatorsystem",
    "youtubeUrl": "https://www.youtube.com/results?search_query=multiple+elevator+cars+dispatch+design"
  },
  {
    "title": "Design a Content Management System (CMS)",
    "description": "Model content types, versioning, publishing workflow, and role-based access.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=content+management+system+low+level+design"
  },
  {
    "title": "Design a Grocery Store Billing / POS System",
    "description": "Model products, barcode scanning, discounts/coupons, tax rules, and receipt generation.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=pos+billing+system+low+level+design"
  },
  {
    "title": "Design a Distributed Unique ID Generator (Snowflake-style)",
    "description": "Design a class that generates unique, roughly-sortable IDs across multiple nodes without central coordination.",
    "primaryUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "solutionUrl": "https://github.com/ashishps1/awesome-low-level-design",
    "youtubeUrl": "https://www.youtube.com/results?search_query=snowflake+unique+id+generator+design"
  }
];
