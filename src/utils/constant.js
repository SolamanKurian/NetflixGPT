export let logo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export let profilephoto="https://avatars.githubusercontent.com/u/154435581";
export let MOVIE_API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_KEY
    }};
export let IMG_CDN_URL="https://image.tmdb.org/t/p/w200";
export let BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg";

export let SUPPORTING_LANG=[{indentifier:"English", name:"English"},{indentifier:"Malayalam",name:"Malayalam"}];

export let OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;