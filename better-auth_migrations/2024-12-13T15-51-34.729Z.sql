alter table `user` add column `role` text;

alter table `user` add column `banned` boolean;

alter table `user` add column `banReason` text;

alter table `user` add column `banExpires` datetime;

alter table `session` add column `impersonatedBy` text