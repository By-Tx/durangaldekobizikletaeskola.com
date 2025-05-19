-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(36) NOT NULL,
    `accountId` TEXT NOT NULL,
    `providerId` TEXT NOT NULL,
    `userId` VARCHAR(36) NOT NULL,
    `accessToken` TEXT NULL,
    `refreshToken` TEXT NULL,
    `idToken` TEXT NULL,
    `accessTokenExpiresAt` DATETIME(0) NULL,
    `refreshTokenExpiresAt` DATETIME(0) NULL,
    `scope` TEXT NULL,
    `password` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deportistas` (
    `numero_licencia` VARCHAR(50) NOT NULL,
    `nombre` VARCHAR(100) NULL,
    `apellidos` VARCHAR(100) NULL,
    `dni` VARCHAR(20) NULL,
    `telefono` BIGINT NULL,
    `fecha_nacimiento` DATE NULL,
    `peso` DECIMAL(10, 2) NULL,
    `altura` DECIMAL(10, 2) NULL,
    `ftp` DECIMAL(10, 2) NULL,
    `pulso` INTEGER NULL,
    `user_id` VARCHAR(36) NULL,
    `entrenador_id` INTEGER NULL,

    UNIQUE INDEX `dni`(`dni`),
    INDEX `entrenador_id`(`entrenador_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`numero_licencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entrenadores` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NULL,
    `apellidos` VARCHAR(100) NULL,
    `dni` VARCHAR(20) NULL,
    `telefono` BIGINT NULL,
    `fecha_nacimiento` DATE NULL,
    `user_id` VARCHAR(36) NULL,

    UNIQUE INDEX `dni`(`dni`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(250) NULL,
    `fecha` DATETIME(0) NULL,
    `lugar` VARCHAR(200) NULL,
    `categoria` ENUM('Cadetes', 'Juveniles', 'Escuela') NULL,
    `modalidad` ENUM('Carretera', 'Mountain-Bike', 'Ciclocross', 'Pista') NULL,
    `descripcion` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events_resultado` (
    `id` INTEGER NOT NULL,
    `tiempo` TIME(0) NULL,
    `posicion` INTEGER NULL,
    `valoracion_escala` DECIMAL(2, 1) NULL,
    `valoracion_deportista` TEXT NULL,
    `valoracion_entrenador` TEXT NULL,
    `evento_id` INTEGER NULL,
    `deportista_id` VARCHAR(50) NULL,

    INDEX `deportista_id`(`deportista_id`),
    INDEX `evento_id`(`evento_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(36) NOT NULL,
    `expiresAt` DATETIME(0) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `ipAddress` TEXT NULL,
    `userAgent` TEXT NULL,
    `userId` VARCHAR(36) NOT NULL,
    `impersonatedBy` TEXT NULL,

    UNIQUE INDEX `token`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(36) NOT NULL,
    `name` TEXT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `emailVerified` TINYINT NOT NULL,
    `image` TEXT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `role` ENUM('admin', 'staff', 'coach', 'runner', 'user', 'instructor') NULL,
    `banned` TINYINT NULL,
    `banReason` TEXT NULL,
    `banExpires` DATETIME(0) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification` (
    `id` VARCHAR(36) NOT NULL,
    `identifier` TEXT NOT NULL,
    `value` TEXT NOT NULL,
    `expiresAt` DATETIME(0) NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activation_codes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'staff', 'coach', 'runner', 'user', 'instructor') NULL,
    `expires_at` DATETIME(0) NULL,
    `usos` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `activation_codes_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListadoEscuelas` (
    `idCarrera` INTEGER NOT NULL,
    `dorsal` CHAR(4) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idCarrera`, `dorsal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `deportistas` ADD CONSTRAINT `deportistas_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `deportistas` ADD CONSTRAINT `deportistas_ibfk_2` FOREIGN KEY (`entrenador_id`) REFERENCES `entrenadores`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `entrenadores` ADD CONSTRAINT `entrenadores_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `events_resultado` ADD CONSTRAINT `events_resultado_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `events_resultado` ADD CONSTRAINT `events_resultado_ibfk_2` FOREIGN KEY (`deportista_id`) REFERENCES `deportistas`(`numero_licencia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ListadoEscuelas` ADD CONSTRAINT `ListadoEscuelas_ibfk_1` FOREIGN KEY (`idCarrera`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
