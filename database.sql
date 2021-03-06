-- DROP DATABASE IF EXISTS fivechan;
-- CREATE DATABASE fivechan;
--
-- \c fivechan;

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(title),
  UNIQUE(slug)
);

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  image VARCHAR(255),
  username VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL,
  board_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE posts ADD CONSTRAINT posts_board_id_fkey
  FOREIGN KEY (board_id) REFERENCES boards (id)
  ON DELETE CASCADE;

CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  image VARCHAR(255),
  username VARCHAR(100) NOT NULL,
  post_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE comments ADD CONSTRAINT comments_post_id_fkey
  FOREIGN KEY (post_id) REFERENCES posts (id)
  ON DELETE CASCADE;

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  token    VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE(username)
);
