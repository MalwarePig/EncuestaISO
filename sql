Create database EncuestaISO;
use EncuestaISO;
CREATE TABLE `encuesta` (
  `Nombre` varchar(50) DEFAULT NULL,
  `Nomina` varchar(5) DEFAULT NULL,
  `Area` varchar(20) DEFAULT NULL,
  `Planta` varchar(10) DEFAULT NULL,
  `Pregunta1` int(2) DEFAULT NULL,
  `Pregunta2` int(2) DEFAULT NULL,
  `Pregunta3` int(2) DEFAULT NULL,
  `Pregunta4` int(2) DEFAULT NULL,
  `Pregunta5` int(2) DEFAULT NULL,
  `Pregunta6` int(2) DEFAULT NULL,
  `Pregunta7` int(2) DEFAULT NULL,
  `Pregunta8` int(2) DEFAULT NULL,
  `Pregunta9` int(2) DEFAULT NULL,
  `Pregunta10` int(2) DEFAULT NULL,
  `Pregunta11` int(2) DEFAULT NULL,
  `Pregunta12` int(2) DEFAULT NULL,
  `Pregunta13` int(2) DEFAULT NULL,
  `Pregunta14` int(2) DEFAULT NULL,
  `Pregunta15` int(2) DEFAULT NULL,
  `Pregunta16` int(2) DEFAULT NULL,
  `Pregunta17` int(2) DEFAULT NULL,
  `Pregunta18` int(2) DEFAULT NULL,
  `Pregunta19` int(2) DEFAULT NULL,
  `Pregunta20` int(2) DEFAULT NULL,
  `Pregunta21` int(2) DEFAULT NULL,
  `Pregunta22` int(2) DEFAULT NULL,
  `Pregunta23` int(2) DEFAULT NULL,
  `Pregunta24` int(2) DEFAULT NULL,
  `Pregunta25` int(2) DEFAULT NULL,
  `Pregunta26` int(2) DEFAULT NULL,
  `Pregunta27` int(2) DEFAULT NULL,
  `Pregunta28` int(2) DEFAULT NULL,
  `Pregunta29` int(2) DEFAULT NULL,
  `Pregunta30` int(2) DEFAULT NULL,
  `Pregunta31` int(2) DEFAULT NULL,
  `Pregunta32` int(2) DEFAULT NULL,
  `Pregunta33` int(2) DEFAULT NULL,
  `Pregunta34` int(2) DEFAULT NULL,
  `Pregunta35` int(2) DEFAULT NULL,
  `Pregunta36` int(2) DEFAULT NULL,
  `Pregunta37` int(2) DEFAULT NULL,
  `Pregunta38` int(2) DEFAULT NULL,
  `Pregunta39` int(2) DEFAULT NULL,
  `Pregunta40` int(2) DEFAULT NULL,
  `Pregunta41` int(2) DEFAULT NULL,
  `Pregunta42` int(2) DEFAULT NULL,
  `Pregunta43` int(2) DEFAULT NULL,
  `Pregunta44` int(2) DEFAULT NULL,
  `Pregunta45` int(2) DEFAULT NULL,
  `Pregunta46` int(2) DEFAULT NULL,
  `Pregunta47` int(2) DEFAULT NULL,
  `Pregunta48` int(2) DEFAULT NULL,
  `Pregunta49` int(2) DEFAULT NULL,
  `Pregunta50` int(2) DEFAULT NULL,
  `Pregunta51` int(2) DEFAULT NULL,
  `Pregunta52` int(2) DEFAULT NULL,
  `Pregunta53` int(2) DEFAULT NULL,
  `Pregunta54` int(2) DEFAULT NULL,
  `Pregunta55` int(2) DEFAULT NULL,
  `Pregunta56` int(2) DEFAULT NULL,
  `Pregunta57` int(2) DEFAULT NULL,
  `Pregunta58` int(2) DEFAULT NULL,
  `Pregunta59` int(2) DEFAULT NULL,
  `Pregunta60` int(2) DEFAULT NULL,
  `Pregunta61` int(2) DEFAULT NULL,
  `Pregunta62` int(2) DEFAULT NULL,
  `Pregunta63` int(2) DEFAULT NULL,
  `Pregunta64` int(2) DEFAULT NULL,
  `Pregunta64P` varchar(4) DEFAULT NULL,
  `Pregunta65` int(2) DEFAULT NULL,
  `Pregunta66` int(2) DEFAULT NULL,
  `Pregunta67` int(2) DEFAULT NULL,
  `Pregunta68` int(2) DEFAULT NULL,
  `Pregunta68P` varchar(4) DEFAULT NULL,
  `Pregunta69` int(2) DEFAULT NULL,
  `Pregunta70` int(2) DEFAULT NULL,
  `Pregunta71` int(2) DEFAULT NULL,
  `Pregunta72` int(2) DEFAULT NULL,
  `FechaReq` datetime DEFAULT (CURDATE())
)

select * from encuesta;


insert into encuesta VALUES('mañas','456','Bravo','10');


