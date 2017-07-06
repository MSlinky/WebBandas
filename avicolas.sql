-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2017 a las 04:50:32
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `avicolas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `id_nota` int(11) NOT NULL,
  `comentario` longtext COLLATE utf8_bin NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nota`
--

CREATE TABLE `nota` (
  `id` int(11) NOT NULL,
  `url` varchar(300) COLLATE utf8_bin NOT NULL,
  `titulo` varchar(150) COLLATE utf8_bin NOT NULL,
  `img` varchar(300) COLLATE utf8_bin NOT NULL,
  `resumen` varchar(500) COLLATE utf8_bin NOT NULL,
  `comentario` longtext COLLATE utf8_bin NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `nota`
--

INSERT INTO `nota` (`id`, `url`, `titulo`, `img`, `resumen`, `comentario`, `fecha`) VALUES
(1, 'estas-buscando-un-piso-de-madera-consejos-de-wood-doctor', '¿Estas buscando un piso de madera?: Consejos de The Wood Doctor ', 'choosing-hardwood-floors-845x321.jpg', 'TIP 1: Elija su piso basado en su estilo de vida  Al comprar pisos de madera, es necesario mantener su estilo de vida en mente. Si usted tiene un hogar ocupado lleno de familia y mascotas, un piso rústico que gana carácter a través del tiempo y crece con su familia sería una excelente opción.', '<h1>TIP 1: Elija su piso basado en su estilo de vida </h1>\n			<p>\n				Al comprar pisos de madera, es necesario mantener su estilo de vida en mente. Si usted tiene un hogar ocupado lleno de familia y mascotas, un piso rústico que gana carácter a través del tiempo y crece con su familia sería una excelente opción. Si usted vive solo o tiene muy poco tráfico en su hogar, usted puede dar un salto con un piso de madera color blanco puro al cual siempre le ha tenido su corazón fijado.\n				</p>\n			<h2>TIP 2: Preste atención al tipo de madera utilizada </h2>\n			<p>La resistencia de la madera es uno de los factores más importantes en la compra de pisos de madera para su hogar. Una de las maderas más resistentes y fuertes es el roble, mientras que el nogal americana es una especia que a pesar de ser hermosa, es una especie más suave que puede rallarse más fácilmente. Sin embargo, la integridad del producto se reduce a la calidad del diseño. He estado en el negocio de la madera durante mucho tiempo y aprendí que hay pisos en el mercado de todos los precios, hay mucha abasto de pisos baratos, pero vienen con mala calidad de diseño. Esencialmente, obtienes lo que pagas.\n				</p>\n			<h2>TIP 3: Conozca lo que está buscando antes de entrar a la tienda </h2>\n			<p>Comprender la diferencia entre las marcas es importante. Cuando entras en un espacio comercial que vende pisos, serás bombardeado con una variedad de fabricantes y numerosos tipos de productos. Sugerimos que realice una investigación en línea para tener una idea de qué marca, diseño y precio desea antes de iniciar el proceso de compra.</p>', '2017-06-09'),
(2, '', '¿Estas buscando un piso de madera?: Consejos de The Wood Doctor ', 'choosing-hardwood-floors-845x321.jpg', 'TIP 1: Elija su piso basado en su estilo de vida  Al comprar pisos de madera, es necesario mantener su estilo de vida en mente. Si usted tiene un hogar ocupado lleno de familia y mascotas, un piso rústico que gana carácter a través del tiempo y crece con su familia sería una excelente opción.', 'TIP 1: Elija su piso basado en su estilo de vida \r\nAl comprar pisos de madera, es necesario mantener su estilo de vida en mente. Si usted tiene un hogar ocupado lleno de familia y mascotas, un piso rústico que gana carácter a través del tiempo y crece con su familia sería una excelente opción. Si usted vive solo o tiene muy poco tráfico en su hogar, usted puede dar un salto con un piso de madera color blanco puro al cual siempre le ha tenido su corazón fijado.\r\nTIP 2: Preste atención al tipo de madera utilizada \r\nLa resistencia de la madera es uno de los factores más importantes en la compra de pisos de madera para su hogar. Una de las maderas más resistentes y fuertes es el roble, mientras que el nogal americana es una especia que a pesar de ser hermosa, es una especie más suave que puede rallarse más fácilmente. Sin embargo, la integridad del producto se reduce a la calidad del diseño. He estado en el negocio de la madera durante mucho tiempo y aprendí que hay pisos en el mercado de todos los precios, hay mucha abasto de pisos baratos, pero vienen con mala calidad de diseño. Esencialmente, obtienes lo que pagas.\r\nTIP 3: Conozca lo que está buscando antes de entrar a la tienda \r\nComprender la diferencia entre las marcas es importante. Cuando entras en un espacio comercial que vende pisos, serás bombardeado con una variedad de fabricantes y numerosos tipos de productos. Sugerimos que realice una investigación en línea para tener una idea de qué marca, diseño y precio desea antes de iniciar el proceso de compra.\r\nTIP 4: Toque y sienta las muestras \r\nDuChâteau Floors tiene diferentes texturas para elegir. Usted puede tener un acabado suave o cepillado que le dará apariencia distintiva. El tacto y la sensación de su piso es importante! Si usted cuida su piso correctamente, podría durar 100 años.\r\nTIP 5: Traiga muestras de tela y colores de su hogar para encontrar la pareja perfecta \r\nSu piso es la base que reúne todos los demás aspectos de su casa para formar un aspecto cohesivo. Sería en su mejor interés para traer muestras de color de otras partes de su hogar para elegir el mejor piso para su estilo. Por ejemplo, es importante traer los colores de sus cubiertas, gabinetes, alfombras y cualquier otra superficie que se pueda imaginar. Esto ayudará a asegurar que todo en su casa se complementa.\r\nTIP 6: Factor de la instalación \r\nComprar un piso de alta calidad como DuChâteau es una inversión, por lo que recomendamos la contratación de un profesional para instalar sus nuevos pisos de madera. Usted sólo tiene una oportunidad para instalar sus pisos correctamente! Es importante no estropear el proceso de instalación y dañar los pisos, o peor aún, anular la garantía.\r\nTIP 7: Considere una red de seguridad \r\nCon cualquier suelo que usted compra usted debe tener en cuenta un factor de 5% de desperdicio. Lo que significa que debe comprar aproximadamente un 5% más de lo que necesita como medida de seguridad. Los accidentes suceden, por lo que puede que tenga que reemplazar una junta o dos.\r\nTenga en cuenta que su piso de madera es una inversión para toda la vida. Si el piso está bien cuidado, estará allí para siempre. Usted ha puesto todo este tiempo en encontrar el piso perfecto, así que no se olvide de vivir en él y disfrutar!', '2017-06-01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Nota_comentarios` (`id_nota`);

--
-- Indices de la tabla `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `Nota_comentarios` FOREIGN KEY (`id_nota`) REFERENCES `nota` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
