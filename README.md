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
REACT_APP_TMDB_KEY=YOUR_TMDB_API_KEY
REACT_APP_OPENAI_KEY=YOUR_OPENAI_KEY
```
