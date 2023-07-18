-- Creazione DB 
CREATE DATABASE BiglietteriaOnline;


-- Creazione tabella Clienti
CREATE TABLE Clienti (
    COD_CLIENTE INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    COGNOME VARCHAR(20) NOT NULL,
    NOME VARCHAR(20) NOT NULL,
    TELEFONO VARCHAR(14) NOT NULL,
    EMAIL VARCHAR(30) NOT NULL,
);
-- Creazione della tabella Biglietti
CREATE TABLE Biglietti (
    COD_OPERAZIONE INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    COD_CLIENTE INT NOT NULL,
    COD_REPLICA CHAR(4) NOT NULL,
    DATA_ORA DATETIME NOT NULL,
    TIPO_PAGAMENTO CHAR(20) NOT NULL  CHECK (TIPO_PAGAMENTO IN ('Carta di Credito', 'Bonifico')),
    QUANTITA INT,
    FOREIGN KEY (COD_CLIENTE) REFERENCES Clienti(COD_CLIENTE),
    FOREIGN KEY (COD_REPLICA) REFERENCES Repliche(COD_REPLICA)
);
-- Creazione tabella Repliche
CREATE TABLE Repliche (
    COD_REPLICA CHAR(4) PRIMARY KEY,
    COD_SPETTACOLO CHAR(4),
    DATA_REPLICA DATE,
    FOREIGN KEY (COD_SPETTACOLO) REFERENCES Spettacoli(COD_SPETTACOLO)
);
-- Creazione tabella Spettacoli
CREATE TABLE Spettacoli (
    COD_SPETTACOLO CHAR(4) PRIMARY KEY,
    TITOLO VARCHAR(40),
    AUTORE VARCHAR(25),
    REGISTA VARCHAR(25),
    PREZZO NUMERIC(4, 2),
    COD_TEATRO NUMERIC,
    FOREIGN KEY (COD_TEATRO) REFERENCES Teatri(COD_TEATRO)
);
-- Creazione della tabella Teatri
CREATE TABLE Teatri (
    COD_TEATRO CHAR(4) PRIMARY KEY,
    NOME VARCHAR(30),
    INDIRIZZO VARCHAR(30),
    CITTA VARCHAR(25),
    PROVINCIA CHAR(2),
    TELEFONO CHAR(14),
    POSTI INT
);


-- Inserimento dati nella tabella Clienti
INSERT INTO Clienti (COD_CLIENTE, COGNOME, NOME, TELEFONO, EMAIL) VALUES
(1, 'Alfieri', 'Valeria', '011/4328346', 'alf@libero.it'),
(2, 'Bellotti', 'Cinzia', '011/79876658', 'bel@tin.it'),
(3, 'Morgeri', 'Giuseppe', '011/76547648', 'dig@email.it'),
(4, 'Bastioni', 'Gianluca', '011/76586548', 'fai@virgilio.it'),
(5, 'Francini', 'Massimiliano', '011/543326565', 'fra@libero.it'),
(6, 'Mattone', 'Fabrizio', '011/98765762', 'gat@tin.it'),
(7, 'Maistoni', 'Ivan', '011/5483678', 'mai@email.it'),
(8, 'Parenti', 'Michele', '011/5367548', 'mik@tin.it'),
(9, 'Morrini', 'Marco', '011/53645872', 'mor@libero.it'),
(10, 'Pagini', 'Giuliana', '011/78363459', 'pag@yahoo.it'),
(11, 'Picati', 'Annamaria', '011/67598721', 'pic@email.it'),
(12, 'Rugliese', 'Antonio', '011/3678465', 'pug@tin.it'),
(13, 'Romanotti', 'Davide', '011/34254367', 'rom@libero.it'),
(14, 'Straniti', 'Annamaria', '011/845673865', 'str@libero.it');

-- Inserimento dati nella tabella Repliche
INSERT INTO Repliche (COD_REPLICA, COD_SPETTACOLO, DATA_REPLICA) VALUES
('R001', 'S001', '2023-10-05'),
('R002', 'S001', '2023-10-06'),
('R003', 'S001', '2023-10-07'),
('R004', 'S001', '2023-10-08'),
('R005', 'S001', '2023-10-09'),
('R006', 'S002', '2023-11-12'),
('R007', 'S002', '2023-11-13'),
('R008', 'S002', '2023-11-14'),
('R009', 'S002', '2023-11-15'),
('R010', 'S002', '2023-11-16'),
('R011', 'S003', '2023-01-05'),
('R012', 'S003', '2023-01-06'),
('R013', 'S003', '2023-01-07'),
('R014', 'S003', '2023-01-08'),
('R015', 'S003', '2023-01-09'),
('R016', 'S004', '2023-01-12'),
('R017', 'S004', '2023-01-13'),
('R018', 'S004', '2023-01-14'),
('R019', 'S004', '2023-01-15'),
('R020', 'S004', '2023-01-16'),
('R021', 'S005', '2023-11-05'),
('R022', 'S005', '2023-11-06'),
('R023', 'S005', '2023-11-07'),
('R024', 'S005', '2023-11-18'),
('R025', 'S005', '2023-11-19'),
('R026', 'S006', '2023-12-12'),
('R027', 'S006', '2023-12-13'),
('R028', 'S006', '2023-12-14'),
('R029', 'S006', '2023-12-15'),
('R030', 'S006', '2023-12-16');

-- Inserimento dati nella tabella Spettacoli
INSERT INTO Spettacoli (COD_SPETTACOLO, TITOLO, AUTORE, REGISTA, PREZZO, COD_TEATRO) VALUES
('S001', 'Appunti per un film sulla lotta di classe', 'Ascanio Celestini', 'Ascanio Celestini', 20.00, 1),
('S002', 'Il birraio di Preston', 'Andrea Camilleri', 'Giuseppe Dipasquale', 20.00, 1),
('S003', 'La Traviata', 'Giuseppe Verdi', 'Laurent Pelly', 40.00, 2),
('S004', 'La Bohème', 'Giacomo Puccini', 'Giuseppe Patroni Griffi', 40.00, 2),
('S005', 'Poveri, ma belli', 'Gianni Togni', 'Massimo Ranieri', 25.00, 3),
('S006', 'Il sogno del piccolo imperatore', 'Gian Mesturino', 'Alberto Barbi', 25);

-- Inserimento dati nella tabella Teatri
INSERT INTO Teatri (COD_TEATRO, NOME, INDIRIZZO, CITTA, PROVINCIA, TELEFONO, POSTI) VALUES
(1, 'Teatro Carignano', 'Piazza Carignano 6', 'Torino', 'TO', '011/3456759', 875),
(2, 'Teatro Regio', 'Piazza Castello 2', 'Torino', 'TO', '011/9870654', 1592),
(3, 'Teatro Alfieri', 'Piazza Solferino 4', 'Torino', 'TO', '011/6574895', 1500);

