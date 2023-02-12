
CREATE TABLE User (
  id INT NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(100),
  email varchar(100) NOT NULL,
  UNIQUE KEY unique_email (email)
  KEY email_idx (email)
);

CREATE TABLE Recipe (
  id INT NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(25),
  description VARCHAR(50),
  url VARCHAR(100),
  user_parent_id INT,
  KEY user_parent_id_idx (user_parent_id)
);

CREATE TABLE RecipeInstruction (
    id INT NOT NULL auto_increment PRIMARY KEY,
    instruction JSON,
    recipe_parent_id INT,
    KEY recipe_parent_id_idx (recipe_parent_id)
);


CREATE TABLE RecipeInstructionHistory (
    id INT NOT NULL auto_increment PRIMARY KEY,
    instruction JSON,
    recipe_parent_id INT,
    timestamp Date,
    KEY recipe_parent_id_idx (recipe_parent_id)
);

-- CREATE TABLE RecipeInstructionHistory(
--     id INT NOT NOT NULL PRIMARY KEY,
--     recipe_instruction_id INT,
--     instruction JSON,
--     timestamp Date,
--     KEY recipe_instruction_id_history_idx (recipe_instruction_id)
-- )


USER => RECIPE => RecipeInstruction