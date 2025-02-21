--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4 (Debian 16.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Draft; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Draft" (
    id text NOT NULL,
    "participantId" text NOT NULL,
    "playerId" text NOT NULL,
    "timestamp" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: Match; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Match" (
    id text NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    "scoreA" integer,
    "scoreB" integer,
    "teamAId" text NOT NULL,
    "teamBId" text NOT NULL
);


--
-- Name: Participant; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Participant" (
    id text NOT NULL,
    name text NOT NULL,
    photo text
);


--
-- Name: Player; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Player" (
    id text NOT NULL,
    nickname text NOT NULL,
    role text NOT NULL,
    "teamId" text,
    points integer DEFAULT 0 NOT NULL,
    "participantId" text,
    photo text NOT NULL
);


--
-- Name: SystemLog; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SystemLog" (
    id text NOT NULL,
    message text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "eventType" text NOT NULL
);


--
-- Name: Team; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Team" (
    id text NOT NULL,
    name text NOT NULL,
    region text NOT NULL
);


--
-- Name: User; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."User" (
    id text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL
);


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Data for Name: Draft; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Draft" (id, "participantId", "playerId", "timestamp") FROM stdin;
\.


--
-- Data for Name: Match; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Match" (id, date, "scoreA", "scoreB", "teamAId", "teamBId") FROM stdin;
\.


--
-- Data for Name: Participant; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Participant" (id, name, photo) FROM stdin;
1	Scy	https://pbs.twimg.com/profile_images/1727386391934279680/Nk9TYWkQ_400x400.jpg
3	Rocio	https://x.com/rocioacasas/photo
10	Monkey	https://pbs.twimg.com/profile_images/1787580244171374592/mP4BfdXN_400x400.jpg
11	Mani	https://pbs.twimg.com/profile_images/1511380548668858369/b8QXDyLx_400x400.jpg
2	Wazo	https://pbs.twimg.com/profile_images/1551304857650450434/6GU34ank_400x400.jpg
6	David	https://pbs.twimg.com/profile_images/1812155241221042176/6eq6dy_S_400x400.jpg
4	Macjony	https://pbs.twimg.com/media/GGo6BppXUAAApG7?format=jpg&name=medium
5	Vetel	https://pbs.twimg.com/profile_images/1552335656885649414/ZFxPXYrt_400x400.jpg
7	Tebi	https://pbs.twimg.com/profile_images/1841842444364664832/egNIlBP__400x400.jpg
8	Nao	https://pbs.twimg.com/profile_images/1553855372611538945/6t9V77zr_400x400.jpg
9	Al3	https://pbs.twimg.com/profile_images/1861000916943491072/rjILQIZR_400x400.jpg
\.


--
-- Data for Name: Player; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Player" (id, nickname, role, "teamId", points, "participantId", photo) FROM stdin;
12	Handy	Support	0aa5	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/12.png
42	Dan	Entry	2627	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/8de6fec8-bea1-48a6-8a67-af404d3cc9b7.png
45	JoyStiCK	Flex	2627	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/41ef7ea1-61e0-412f-8d84-ac46fc10b8ca.png
44	Always	Flex	2627	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/10dac380-96a0-4353-80c8-bef350286650.png
57	HerdsZ	Entry	2f1f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/f8b80cee-9e05-4c7c-a1d8-79f97a6bb357.png
60	Nade	Support	2f1f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/87074643-2c2f-4019-9826-585f5fae5b54.png
59	Kheyze	Flex	2f1f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/4b490672-3225-48e6-8015-22c21940547b.png
58	Jv92	Entry	2f1f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/10c17ae8-0609-4e10-b82d-6d28dd310925.png
5	Solotov	Flex	3f7b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/5ca3dba4-477c-4628-9d21-a987ecdb30e6.png
3	LikEfac	Flex	3f7b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/efa7fcde-88a0-4aa8-895f-9f2e603a772b.png
2	BriD	Support	3f7b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/371f4bb3-f53f-447e-9c08-5ebbb687d488.png
1	Shaiiko	Entry	3f7b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/73c3e1e8-d6c1-483f-a923-82eca964c0e1.png
46	Jlad	Support	509f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/73c0ceb1-bc9f-481e-a560-e10778977eb5.png
50	Dov2hkiin	Flex	509f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/81add545-25d1-40c5-a6db-434796e14c87.png
49	Robby	Flex	509f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/8112b426-5397-4b03-8367-9a9182fc4067.png
48	Hashom	Entry	509f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/a9ad4a79-8768-4533-bbc9-852bd9371dad.png
17	Dodez	Entry	83aa	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/a80e1ea9-8119-4c13-8009-156ca37fce5f.png
16	D4sh	Support	83aa	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/d5a43c26-8a06-4cf5-adfb-2db3de2ee84b.png
20	Volpz	Flex	83aa	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/e5ec108d-3a15-4d02-a71c-692e262c87e9.png
19	L0BIN	Entry	83aa	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/6a069a64-3d88-4742-adad-e98f42484f5b.png
18	Dotz	Support	83aa	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/5af88133-5285-4a2d-9909-98e4fef7dfaf.png
29	Adrian	Support	9672	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/54627ab0-5e5b-4d59-88f9-10e4324c0792.png
30	Virtue	Support	9672	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/bf3038ef-1923-41e6-8726-cc3b90b033fb.png
26	Savage	Entry	9672	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/5df2e170-6dbb-480d-8160-758b80dc6650.png
27	Jume	Flex	9672	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/64e11e60-533a-4b83-9bb0-ecb5b827bb43.png
28	Gruby	Flex	9672	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/42435a60-2f17-46e6-a97a-da63e7ec4137.png
61	Rexen	Flex	9c9a	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/a2b2a638-b494-4e30-a426-abbcc9603ef1.png
25	SpiriTz	Support	9e76	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/6d90fb91-0ae3-472e-846f-ed36c3671d10.png
21	Atom	Flex	9e76	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/8c6a09e8-6dbc-462a-98ba-8bb83b6be5f8.png
22	Dream	NO ROLE	9e76	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/c3ddbedb-7a1e-48be-b564-77d8d3cf042b.png
23	Gaveni	Entry	9e76	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/96493dca-8cc0-4333-b0ba-f4f7e2d14949.png
24	Hotancold	Flex	9e76	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/0c17220d-9b89-474c-9fee-41800fc78b0e.png
35	Nafe	Support	a215	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/e62095d2-c7cf-4d1e-9b4c-4f987c1516ef.png
31	NJR	Flex	a215	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/60a871bf-b174-4d31-8c4c-1426a5506a9d.png
32	Panbazou	Flex	a215	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/e9c56e7f-9688-4a50-8bdb-d4652f4435ce.png
33	Beaulo	Flex	a215	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/699f7b1d-40df-41ab-87f5-4d60b42ed240.png
55	Spoit	Entry	a3be	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/7cc90e50-4b63-403d-9e93-ebd620cd45eb.png
54	Kyno	Support	a3be	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/e6e68b07-a92c-4cca-b9c5-00bae4640248.png
53	Packer	Support	a3be	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/b3f30953-4626-44cb-a67a-ac0121f86fa8.png
52	DFZR	Flex	a3be	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/4aee5eb3-9af5-4bee-b112-e501d7fc5685.png
9	Maia	Entry	a4d0	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/ebf63835-e755-45cb-a719-327be248d9b5.png
8	Resetz	Support	a4d0	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/9cedc52b-271b-4db7-bc41-cf2f0e80f744.png
7	Paluh	Entry	a4d0	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/56e5a7de-5087-4c83-9c2a-44b51de890b4.png
6	Nesk	Flex	a4d0	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/2dbab903-cdee-49d2-85f1-767ef4123705.png
11	Soulz1	Entry	0aa5	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/a09e7c11-559a-4b44-bf6e-3bfb774be30a.png
15	Vitaking	Support	0aa5	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/a93eff7f-2ff9-4da2-a857-c54fe925b7ef.png
14	KDS	Flex	0aa5	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/7104d3f9-610b-498e-a719-7c8a07bc0ce4.png
13	Cyber	Flex	0aa5	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/9d96665e-16b0-42ae-9915-6e7a095db1ae.png
43	ShepparD	Support	2627	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/6d79d739-802e-4638-838d-5e7b432e5286.png
41	p4sh4	Flex	2627	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/6111b4f5-e3ad-41a3-98aa-aa8c1c212cf1.png
56	FelipoX	Support	2f1f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/d161b053-a50e-43db-93d3-6d64a6190bd4.png
4	Yuzus	Flex	3f7b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/74d139cc-25c7-498c-bf29-1b328a3ea8d8.png
77	Rider	Entry	4f2b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/830fa933-4729-4e34-9d70-556ecf7dbf50.png
76	Misa	Entry	4f2b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/69880ee7-aa86-4345-9bb2-09aa51c90a22.png
78	Soldier	Support	4f2b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/892a2961-55e1-4583-902f-b8bc7e4e0715.png
79	Yass	Flex	4f2b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/b7ca27c2-1165-40c6-8fb7-a2738eacc673.png
80	Gotti	Support	4f2b	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/86d5f11b-428c-48fd-8857-664319318337.png
47	Guardz	Support	509f	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/75c2eb55-0438-40a9-a464-b210c811a9be.png
40	Benja	Entry	5e62	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/d1399fc4-7c9c-45e1-a0aa-c43a23118a6e.png
36	Forrest	Flex	5e62	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/338ff06b-e29e-4df3-bf70-5a643edbef71.png
37	Ashn	Entry	5e62	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/6109d18b-d9cc-47bf-8fb9-f9d0a39e32db.png
38	J90	Flex	5e62	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/09bb5d99-6716-424e-8a05-a1252a7b3598.png
39	Fultz	Support	5e62	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/e3873e5a-a668-4559-b28e-b8c800c35791.png
64	Canadian	Support	9c9a	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/1b87d519-7d88-4889-b533-084d07cc150a.png
62	Ambi	Entry	9c9a	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/70fcd269-9344-46b2-8063-5d6b88e9f6b8.png
63	Gryxr	Entry	9c9a	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/9e6b3d1b-e820-4109-beac-415201b25630.png
65	Surf	Flex	9c9a	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/2198b7cf-9f7a-42be-83b0-ec8c4223cd08.png
34	Kobelax	Entry	a215	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/1eca2333-fa1f-432e-b204-5cb265204563.png
51	Gunnar	Flex	a3be	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/bad4cf4d-f648-49d5-a1c1-4d4e7fdaa14c.png
10	Lagonis	Support	a4d0	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/69fef492-0a81-4116-b2fd-e9eaa75cf053.png
69	Wqsyo1	Entry	af3c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/be68e09b-6401-4b75-a75c-5aebbb368a1f.png
68	FishLike	Support	af3c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/92e922f7-9518-4e5d-b249-3dd83fcc0f9b.png
67	Nina	Entry	af3c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/d4d96022-fa32-42a8-84f2-10f7e8877c3f.png
66	Rec	Flex	af3c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/cfc54134-b022-42de-b8dd-569b97f50d51.png
70	Taiyou	Support	af3c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/5eb53b53-9105-4730-973c-045ab73c4790.png
73	Reeps96	Entry	c01c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/50f31037-21db-46c8-90b1-82993d318f77.png
71	Hovenherst	Flex	c01c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/c1cd293a-3e67-4c67-8844-9295734852e2.png
74	MentalistC	Support	c01c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/8cfa44a0-d64e-415e-9ca6-47be054a6c4e.png
75	Leadr	Flex	c01c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/b6363751-0b2e-46c9-911f-81be0936e586.png
72	Player1	NO ROLE	c01c	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/22e0a6a8-ad43-4cd3-87c3-d1c61677f342.png
92	Dias	Entry	d055	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/bf3d649a-5aca-47ce-bbff-3fc833dd8c1d.png
91	Nuers	Entry	d055	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/886f8e1f-db5f-4b81-9daa-eab853e242fd.png
95	Hat	Flex	d055	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/eb3c6455-152e-4570-a28a-7b4ac593e5f4.png
94	Yoggah	Entry	d055	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/2b9daf12-3440-4830-8f7e-5402ec45ad8e.png
88	live	Support	9d22	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/b9339637-316f-4b6b-9c9f-a578a4651403.png
86	Bassetto	Entry	9d22	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/f11a0cf0-0b80-4405-b6e1-72db8dd787a7.png
90	Stk	Flex	9d22	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/7018354c-1d2b-47cf-8e70-710b595fcfe8.png
89	Peres	Entry	9d22	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/c19a3aaf-fd84-4531-a487-ad77e2412c7e.png
81	BalZ	Entry	3b8e	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/cdf49fd7-87f5-4a8b-aff6-87ed1e64a907.png
82	UNNO	Support	3b8e	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/26142d6d-7cc3-498a-8aa7-dc5e01b40436.png
83	Alemao	Flex	3b8e	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/2dea0128-d2dd-4243-a61f-78a285f26ebf.png
84	Loira	Entry	3b8e	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/b422d2fb-3c02-4288-85b7-48ce586a393f.png
85	Doki	Flex	3b8e	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/a4e6d56c-6c57-454e-87aa-2f22a3587508.png
100	Sironeko	Flex	6de1	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/291ff55b-7fec-41f0-b1f6-c821faa345eb.png
98	Chibisu	Support	6de1	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/0ffaf3d6-2a28-4834-b668-a26bf97156cf.png
97	BlackRay	Entry	6de1	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/c4c04e56-b285-4b35-bb92-1a9d5f67805c.png
99	ShuReap	Entry	6de1	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/046a5cc9-07b0-4e8e-baef-2a35666e9d2a.png
96	Anitun	Entry	6de1	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/521fa84d-3fa5-473a-bd4e-9a19a0e57eb2.png
93	GMZ	Support	d055	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/4cfbfc91-664a-4632-b232-fdaa880aa616.png
87	Flastry	Entry	9d22	0	\N	https://static-esports.ubisoft.com/esports-platform/common/members/01539385-f7eb-469d-8703-1d8751120b8b.png
\.


--
-- Data for Name: SystemLog; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."SystemLog" (id, message, "createdAt", "eventType") FROM stdin;
\.


--
-- Data for Name: Team; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Team" (id, name, region) FROM stdin;
a4d0	Team Liquid	SAL
9672	Team Secret	EMEA
6de1	Team New	APAC
0aa5	FaZe Clan	SAL
2627	Virtus PRO	EMEA
2f1f	FURIA	SAL
3f7b	BDS	EMEA
4f2b	PSG Talon	APAC
509f	Falcons	EMEA
5e62	SSG	NAL
83aa	W7M	SAL
9c9a	Shopify Rebellion	NAL
9e76	Unwanted	NAL
a215	DarkZero	NAL
a3be	M80	NAL
af3c	SCARZ	APAC
c01c	Team JOEL	APAC
3b8e	G2	EMEA
9d22	RAZAH COMPANY	SAL
d055	OXYGEN	NAL
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."User" (id, username, password, "isAdmin") FROM stdin;
2	moderador	moderador123	f
3	user	user	f
1	adminTebi	adminTebi	t
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
d3631591-3aad-4024-8414-e7b8eaba8234	7d359447a56a0e9c288dde7f819ae37a94daf2f2bf6fb2f11362f68dccd95b7d	2025-02-01 16:19:16.089932+00	20250131181748_init	\N	\N	2025-02-01 16:19:15.102845+00	1
a055f665-52ab-4984-8a46-acfd03263cd8	2d7018358b65ff654e7e869c25456ef65ba8798deb8f0c306da0823b54565761	2025-02-01 16:19:17.39281+00	20250131182243_add_participant_relation	\N	\N	2025-02-01 16:19:16.453198+00	1
164a4bd5-7065-48ce-b573-9be9d9db180d	7740a7edef243a09330d07da87f18a62768bda0da8ca8d32b4e855a29741e99f	2025-02-01 16:19:18.710129+00	20250131183135_add_photo_to_player	\N	\N	2025-02-01 16:19:17.76157+00	1
dbf9fd34-e0d2-402e-8bf1-0ed8ab316253	40dd920efba96b5c372b9192145bf958fef62c607e6518ae89f9e802a1c0ee96	2025-02-01 16:19:20.065567+00	20250131192032_add_draft_relations	\N	\N	2025-02-01 16:19:19.086831+00	1
eb614b47-d5ee-4221-bde4-da969a0d2f96	94cb2e1ceb958fc0f34042630f46e228e8a58cf420a18618ebb7df3c5c4a3985	2025-02-01 16:19:21.492977+00	20250131194720_add_unique_nickname	\N	\N	2025-02-01 16:19:20.427669+00	1
7bf28cb3-08de-4275-9a0c-b5205365c4fe	43de3a92f0deac66879cebd8a6fbc00d50f6ba4697446ce7329ba66c99f51377	2025-02-01 16:19:22.806759+00	20250131194904_add_unique_participant_name	\N	\N	2025-02-01 16:19:21.890145+00	1
54978a2d-76a9-41b3-a4de-73298c633ff1	159a517628a88b60af4ede590f7db5e83516d4fbe75505307624c36d52f857ff	2025-02-01 16:19:24.173156+00	20250131200101_fix_draft_relations	\N	\N	2025-02-01 16:19:23.223554+00	1
53a2c3b9-e965-4afc-aa19-c088039ee6ce	7d9cc59a3179c9c9523de277a11023b94da263d6208f9282f3bbc2414d844469	2025-02-01 16:19:25.519491+00	20250131213348_add_event_type_to_logs	\N	\N	2025-02-01 16:19:24.535607+00	1
\.


--
-- Name: Draft Draft_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Draft"
    ADD CONSTRAINT "Draft_pkey" PRIMARY KEY (id);


--
-- Name: Match Match_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Match"
    ADD CONSTRAINT "Match_pkey" PRIMARY KEY (id);


--
-- Name: Participant Participant_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Participant"
    ADD CONSTRAINT "Participant_pkey" PRIMARY KEY (id);


--
-- Name: Player Player_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_pkey" PRIMARY KEY (id);


--
-- Name: SystemLog SystemLog_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SystemLog"
    ADD CONSTRAINT "SystemLog_pkey" PRIMARY KEY (id);


--
-- Name: Team Team_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Participant_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Participant_name_key" ON public."Participant" USING btree (name);


--
-- Name: Player_nickname_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Player_nickname_key" ON public."Player" USING btree (nickname);


--
-- Name: Team_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Team_name_key" ON public."Team" USING btree (name);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: Draft Draft_participantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Draft"
    ADD CONSTRAINT "Draft_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES public."Participant"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Draft Draft_playerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Draft"
    ADD CONSTRAINT "Draft_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES public."Player"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Match Match_teamAId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Match"
    ADD CONSTRAINT "Match_teamAId_fkey" FOREIGN KEY ("teamAId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Match Match_teamBId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Match"
    ADD CONSTRAINT "Match_teamBId_fkey" FOREIGN KEY ("teamBId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Player Player_participantId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES public."Participant"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Player Player_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

