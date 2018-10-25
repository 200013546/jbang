-- J'BANG! database is called xjh86w1rt52735sx;

DROP DATABASE IF EXISTS xjh86w1rt52735sx;

DROP TABLE IF EXISTS links;

USE xjh86w1rt52735sx;

-- Create the table tasks.
CREATE TABLE links (
    id int AUTO_INCREMENT,
    url varchar(255) NOT NULL,
    title varchar(255),
    metadata text,
    type varchar(100),
    popularity INT DEFAULT 0,
    createdAt TIMESTAMP NOT NULL,
    updatedAT TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO links (url,title,metadata,popularity) VALUES (
    "https://freephotos.cc/",
    "FreePhotos.cc - Free Stock Photos, Royalty Free Images (CC)",
    "Find free beautiful stock photos with Creative Commons (CC) licensing. Download royalty free images and use them on your website or print!",
    "0"
    );
