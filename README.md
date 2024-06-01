# FlixGPT

## Planning

### Features

- **Login / SignUp**

  - Firebase authentication with validation
  - Redirect to browse after login

- **Browse (post-authentication)**
  - Header
  - Main Movie
    - Trailer in background
    - Title & description
  - Movie Suggestions
    - Multiple movie lists
- **Movie Details**
  - Header
  - Movie Info
    - Title
    - Description
    - Rating
    - Genres

### Technical Details

- Firebase authentication and form validation
- useRef and custom hooks
- Redux for state management
- Multi-language support
- Integration of GPT API for movie suggestions
- API data fetching

## Setup

To run the code, add a `.env` file with the following keys:

```plaintext
REACT_APP_TMDB_KEY=YOUR_TMDB_API_KEY (eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjIwYTQ3NmQ4N2E0NTcyNjI4ZjI1NGRjY2ZkMjQ4NyIsInN1YiI6IjY1NzEyMDJlYTIyZDNlMDBlMTFiNzk0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRm5mhGuK6puLzu4I05kKSP0RoodZt-1rdqEdqCs3KU)
REACT_APP_OPENAI_KEY=YOUR_OPENAI_KEY
```
