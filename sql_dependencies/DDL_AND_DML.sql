CREATE DATABASE courses;
USE courses;

CREATE TABLE tbCourses(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    duration_in_years TINYINT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tbCourses(name, duration_in_years) VALUES ('ADMINISTRAÇÃO', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('ARQUITETURA E URBANISMO', 3);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('ARTES CÊNICAS', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('CIÊNCIA DA COMPUTAÇÃO', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('COMUNICAÇÃO SOCIAL', 2);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('DIREITO', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('FILOSOFIA', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('FÍSICA', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('GEOGRAFIA', 3);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('LETRAS', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('MATEMÁTICA', 2);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('PEDAGOGIA', 3);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('TEOLOGIA', 2);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('QUÍMICA', 4);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('RELAÇÕES INTERNACIONAIS', 3);
INSERT INTO tbCourses(name, duration_in_years) VALUES ('SERVIÇO SOCIAL', 5);