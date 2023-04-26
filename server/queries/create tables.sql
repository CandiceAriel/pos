USE pos_restaurant;

CREATE TABLE categories(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    category_code text(10) NOT NULL,
    category text(100) NOT NULL
);

CREATE TABLE menu(
	categoryID INT,
	menu_name TEXT,
    menu_desc TEXT,
    price DECIMAL(10,2),
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    CONSTRAINT FK_CategoryId FOREIGN KEY (categoryID) REFERENCES categories(id)
);

