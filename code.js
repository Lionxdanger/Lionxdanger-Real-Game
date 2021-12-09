var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a2e0c779-45e1-45d1-9992-3cca92ce9272","5b94a23b-1b34-4b77-96b0-f760ab718675","f8c3e500-bea9-4777-9533-ca14a85af19c","c693af8d-7630-4740-a5a6-6d8de33d9004","e48cbc5a-fc4f-4f82-9a56-8f4c3fccb2d7","1d03a2a7-ac2e-4664-9d8f-4d2e92a2f136","b1004334-efa6-44a2-a7bb-a2209df4db8c","4bc89f83-cf84-4402-896e-e32b181234d8","c45720a3-2092-40bd-b618-39935622ad78","7b17b13a-5598-43b0-862f-9e9f6f45f751","6fe13a4c-c000-4b53-b919-459d6ed10595","f3f9b5dc-8576-4cb3-891c-13e736d192d3","bfe062a5-4dcc-4da9-9c65-3c5582de0d47","bb50979e-487f-4b7e-bbc8-a435b31108c3","d616883c-1576-4dd5-87c3-4b7ad031e29d","a1777df4-9867-4c17-95c9-5e384ff2d38a","523d27e0-2f5c-4bd5-b5b3-f0e6ade5d836","bb1ac476-c639-4c5e-b50d-756952091816","87762fd1-c83f-4532-8f49-479a0bf643a1","ed01edcb-4e6d-45ee-b090-5c2f040b2aeb","52eed4c4-609c-4301-8cae-7c16b4ea4e87","76a08c95-2eeb-46d4-8a3e-0e8699839975","ef55287f-723d-44d4-b832-663c247d0c27","c61a994f-b561-4e7a-ba38-1f3628c26a3f","f4fa24f7-21e8-4459-b0ac-9443ea416675","9914d9bb-32f3-4cfc-9a16-4817bfc93ca6","f078f430-fc51-4a00-afdb-b7b705fe2c29","e6b05a77-7250-4319-aa85-cc94d2f19e07","70b63aac-d23e-4662-8d6b-8e0b9ddcf890","d90de252-9c7d-4e1f-b100-1c0ed7f298bd","381f313b-6e02-4103-aef9-401159ce9e9a","0de4c8ed-7ff4-4fc9-a133-9d1d137291f8","450ec06c-cad0-4b19-9590-e9ed8d61bdfe","e474c32d-bd8a-4f83-83e8-aa6322f79d2e","ca915776-ca8b-4841-b9f3-e0655fb7334c","f2474a7d-d6ce-4536-b2fe-0d378921b5d7","21fcaafa-2c17-4c24-b789-569771f46910","c8a61cbf-12c9-4c6d-87cd-7cef3c884888","6d5b78fd-540f-4f7a-8acb-88a5bcf7ca0e","75f251a9-bc3b-4940-8afd-5d4453242ff3","cfec8045-99bc-45d5-8372-c855f8c58c7a","c981bb2e-ff1f-4a13-b02f-006674d05b15","3ea403c2-bda7-466a-a65d-81ebd82d6d8b","83cca678-2e16-465b-8af4-763d8bc1be94","e5f0c5da-2aec-4209-83f6-64e63004f43a","36d2f233-5b4e-48a8-a2cd-4ed1bd8e0160","49ffcd37-7074-4402-8e93-b0e746db877e","8550ac44-95a3-41ec-9a59-a599cadb40f9","b8f27e99-9fd5-4858-b176-c51b968b555f","93661ed5-f525-4fb0-bd62-691fc98f7298","cc9c610c-8109-44ab-bc20-679c6a0f13e2","c5e0fd59-b98a-4264-a051-ad8605d0a1c8","759ab8ab-16af-4b44-a22d-bd3786c4ddeb"],"propsByKey":{"a2e0c779-45e1-45d1-9992-3cca92ce9272":{"name":"BG1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lpak.Cdz9nhhNIkGm18cPDlrInhMJ9A.","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a2e0c779-45e1-45d1-9992-3cca92ce9272.png"},"5b94a23b-1b34-4b77-96b0-f760ab718675":{"name":"GB1","sourceUrl":"assets/api/v1/animation-library/gamelab/hDbHMp1UmEHMCSm_l9dJNKAHs.0XokdT/category_animals/birdside_03.png","frameSize":{"x":400,"y":230},"frameCount":1,"looping":true,"frameDelay":2,"version":"hDbHMp1UmEHMCSm_l9dJNKAHs.0XokdT","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":230},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hDbHMp1UmEHMCSm_l9dJNKAHs.0XokdT/category_animals/birdside_03.png"},"f8c3e500-bea9-4777-9533-ca14a85af19c":{"name":"SH1","sourceUrl":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png","frameSize":{"x":332,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"raVeat7ztKoUAR4mw3EKYzR528Qgidoc","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png"},"c693af8d-7630-4740-a5a6-6d8de33d9004":{"name":"SH2","sourceUrl":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png","frameSize":{"x":332,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"raVeat7ztKoUAR4mw3EKYzR528Qgidoc","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png"},"e48cbc5a-fc4f-4f82-9a56-8f4c3fccb2d7":{"name":"SH3","sourceUrl":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png","frameSize":{"x":332,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"raVeat7ztKoUAR4mw3EKYzR528Qgidoc","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png"},"1d03a2a7-ac2e-4664-9d8f-4d2e92a2f136":{"name":"SH4","sourceUrl":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png","frameSize":{"x":332,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"raVeat7ztKoUAR4mw3EKYzR528Qgidoc","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png"},"b1004334-efa6-44a2-a7bb-a2209df4db8c":{"name":"SH5","sourceUrl":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png","frameSize":{"x":332,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"raVeat7ztKoUAR4mw3EKYzR528Qgidoc","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png"},"4bc89f83-cf84-4402-896e-e32b181234d8":{"name":"SH6","sourceUrl":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png","frameSize":{"x":332,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"raVeat7ztKoUAR4mw3EKYzR528Qgidoc","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/raVeat7ztKoUAR4mw3EKYzR528Qgidoc/category_video_games/gameplayobject_shield_02.png"},"c45720a3-2092-40bd-b618-39935622ad78":{"name":"B1","sourceUrl":"assets/api/v1/animation-library/gamelab/JEI2Wj2WzDlmJQiGpaOarpdUVJuhckq2/category_buildings/building_25.png","frameSize":{"x":394,"y":225},"frameCount":1,"looping":true,"frameDelay":2,"version":"JEI2Wj2WzDlmJQiGpaOarpdUVJuhckq2","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":225},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JEI2Wj2WzDlmJQiGpaOarpdUVJuhckq2/category_buildings/building_25.png"},"7b17b13a-5598-43b0-862f-9e9f6f45f751":{"name":"B2","sourceUrl":"assets/api/v1/animation-library/gamelab/q07YKJjj1_E.ZZm0yVUKJp6JosuA.65a/category_buildings/building_06.png","frameSize":{"x":400,"y":234},"frameCount":1,"looping":true,"frameDelay":2,"version":"q07YKJjj1_E.ZZm0yVUKJp6JosuA.65a","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":234},"rootRelativePath":"assets/api/v1/animation-library/gamelab/q07YKJjj1_E.ZZm0yVUKJp6JosuA.65a/category_buildings/building_06.png"},"6fe13a4c-c000-4b53-b919-459d6ed10595":{"name":"B3","sourceUrl":"assets/api/v1/animation-library/gamelab/kdWud7uHpOnVD5Wg5pbDrxq1E6wG5KPD/category_buildings/building_05.png","frameSize":{"x":400,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"kdWud7uHpOnVD5Wg5pbDrxq1E6wG5KPD","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kdWud7uHpOnVD5Wg5pbDrxq1E6wG5KPD/category_buildings/building_05.png"},"f3f9b5dc-8576-4cb3-891c-13e736d192d3":{"name":"Win1","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/f3f9b5dc-8576-4cb3-891c-13e736d192d3.png","frameSize":{"x":512,"y":473},"frameCount":1,"looping":true,"frameDelay":4,"version":"92gKv5FBbECAsejcjTFRxZ9x7.etvST.","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":473},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/f3f9b5dc-8576-4cb3-891c-13e736d192d3.png"},"bfe062a5-4dcc-4da9-9c65-3c5582de0d47":{"name":"Reset1","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/bfe062a5-4dcc-4da9-9c65-3c5582de0d47.png","frameSize":{"x":768,"y":509},"frameCount":1,"looping":true,"frameDelay":4,"version":"d3UWnqRhC2gIWKJc5ge_3G4X_T.vuUGW","loadedFromSource":true,"saved":true,"sourceSize":{"x":768,"y":509},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/bfe062a5-4dcc-4da9-9c65-3c5582de0d47.png"},"bb50979e-487f-4b7e-bbc8-a435b31108c3":{"name":"Start","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/bb50979e-487f-4b7e-bbc8-a435b31108c3.png","frameSize":{"x":860,"y":680},"frameCount":1,"looping":true,"frameDelay":4,"version":"NttiqYRINwXbgo6e7bXOCCgubTFkKpUt","loadedFromSource":true,"saved":true,"sourceSize":{"x":860,"y":680},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/bb50979e-487f-4b7e-bbc8-a435b31108c3.png"},"d616883c-1576-4dd5-87c3-4b7ad031e29d":{"name":"Next LVL","sourceUrl":null,"frameSize":{"x":1920,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"HWikkWb0g31mnEcmHUN81fqyXolk0ZfQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1080},"rootRelativePath":"assets/d616883c-1576-4dd5-87c3-4b7ad031e29d.png"},"a1777df4-9867-4c17-95c9-5e384ff2d38a":{"name":"BG2","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"},"523d27e0-2f5c-4bd5-b5b3-f0e6ade5d836":{"name":"WH1","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"bb1ac476-c639-4c5e-b50d-756952091816":{"name":"WH2","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"87762fd1-c83f-4532-8f49-479a0bf643a1":{"name":"WH3","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"ed01edcb-4e6d-45ee-b090-5c2f040b2aeb":{"name":"WH4","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"52eed4c4-609c-4301-8cae-7c16b4ea4e87":{"name":"WH5","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"76a08c95-2eeb-46d4-8a3e-0e8699839975":{"name":"WH6","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"ef55287f-723d-44d4-b832-663c247d0c27":{"name":"WH7","sourceUrl":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png","frameSize":{"x":362,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U.Wd_594GtBO_i73pXf.2Ss9aH4oJ5Bj/category_video_games/gameplayobject_health.png"},"c61a994f-b561-4e7a-ba38-1f3628c26a3f":{"name":"shop","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"EED0PDmS6hGuSb3hhqJfmQpSVor4mK30","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c61a994f-b561-4e7a-ba38-1f3628c26a3f.png"},"f4fa24f7-21e8-4459-b0ac-9443ea416675":{"name":"Red Bird","sourceUrl":null,"frameSize":{"x":400,"y":214},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bn7l.poB1BUArHBSbDV_dkjGAXHGi8BH","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":214},"rootRelativePath":"assets/f4fa24f7-21e8-4459-b0ac-9443ea416675.png"},"9914d9bb-32f3-4cfc-9a16-4817bfc93ca6":{"name":"Red Bird Play","sourceUrl":null,"frameSize":{"x":400,"y":214},"frameCount":1,"looping":true,"frameDelay":12,"version":"d5FtwX7zLi__hkYJfZqHIIlxl6hHyvjo","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":214},"rootRelativePath":"assets/9914d9bb-32f3-4cfc-9a16-4817bfc93ca6.png"},"f078f430-fc51-4a00-afdb-b7b705fe2c29":{"name":"shopL","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y0Xi0hTQ_OEfv0arKs3fwdtSzfDDyvuB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f078f430-fc51-4a00-afdb-b7b705fe2c29.png"},"e6b05a77-7250-4319-aa85-cc94d2f19e07":{"name":"Green Bird","sourceUrl":"assets/api/v1/animation-library/gamelab/XTPY1EIldMt.W.ftuhciRBRXyf0cygel/category_animals/birdside_18.png","frameSize":{"x":398,"y":236},"frameCount":1,"looping":true,"frameDelay":2,"version":"XTPY1EIldMt.W.ftuhciRBRXyf0cygel","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":236},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XTPY1EIldMt.W.ftuhciRBRXyf0cygel/category_animals/birdside_18.png"},"70b63aac-d23e-4662-8d6b-8e0b9ddcf890":{"name":"Green Bird Play","sourceUrl":"assets/api/v1/animation-library/gamelab/XTPY1EIldMt.W.ftuhciRBRXyf0cygel/category_animals/birdside_18.png","frameSize":{"x":398,"y":236},"frameCount":1,"looping":true,"frameDelay":2,"version":"XTPY1EIldMt.W.ftuhciRBRXyf0cygel","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":236},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XTPY1EIldMt.W.ftuhciRBRXyf0cygel/category_animals/birdside_18.png"},"d90de252-9c7d-4e1f-b100-1c0ed7f298bd":{"name":"Red Bird Shop","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/d90de252-9c7d-4e1f-b100-1c0ed7f298bd.png","frameSize":{"x":1920,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"QIS1RTT_E46WGxr22uza8j8W6RoWfK9G","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1080},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/d90de252-9c7d-4e1f-b100-1c0ed7f298bd.png"},"381f313b-6e02-4103-aef9-401159ce9e9a":{"name":"shopLL","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/381f313b-6e02-4103-aef9-401159ce9e9a.png","frameSize":{"x":1920,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"b7iW3i_Yj3k_e2WCLXyxxwt6IHpt0.lp","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1080},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/381f313b-6e02-4103-aef9-401159ce9e9a.png"},"0de4c8ed-7ff4-4fc9-a133-9d1d137291f8":{"name":"coin1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MarqweuTb0OK9DyE8gQoZ7M9KtG4ggrl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0de4c8ed-7ff4-4fc9-a133-9d1d137291f8.png"},"450ec06c-cad0-4b19-9590-e9ed8d61bdfe":{"name":"coin2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"imO59ZbSnK74B0u4mcptDUZan5iCUa2a","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/450ec06c-cad0-4b19-9590-e9ed8d61bdfe.png"},"e474c32d-bd8a-4f83-83e8-aa6322f79d2e":{"name":"coin3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qJi.G0.8_o0cKtp97t04Ac5ugdTio_W2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e474c32d-bd8a-4f83-83e8-aa6322f79d2e.png"},"ca915776-ca8b-4841-b9f3-e0655fb7334c":{"name":"coin4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ChkWb4iJ_te4QIKfQjO68vgfxawJgihN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ca915776-ca8b-4841-b9f3-e0655fb7334c.png"},"f2474a7d-d6ce-4536-b2fe-0d378921b5d7":{"name":"coin5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bQl0OMoXZrGcdyqs_pXDqCMi.nSy.kJr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f2474a7d-d6ce-4536-b2fe-0d378921b5d7.png"},"21fcaafa-2c17-4c24-b789-569771f46910":{"name":"Oj fill","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9hyaB6SvnnTYZSpk2fHb0iKsI57ThLjw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/21fcaafa-2c17-4c24-b789-569771f46910.png"},"c8a61cbf-12c9-4c6d-87cd-7cef3c884888":{"name":"x","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7qrzif7AXmj8iSC9uR19sKeaO.k9RU_H","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c8a61cbf-12c9-4c6d-87cd-7cef3c884888.png"},"6d5b78fd-540f-4f7a-8acb-88a5bcf7ca0e":{"name":"Poor5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NPAZKzgKKR9Eyzxo8OptuDWAgHIG4VDb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6d5b78fd-540f-4f7a-8acb-88a5bcf7ca0e.png"},"75f251a9-bc3b-4940-8afd-5d4453242ff3":{"name":"x2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_KbeuyptRRj3f61jxkJqcWdO79rdc7tn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/75f251a9-bc3b-4940-8afd-5d4453242ff3.png"},"cfec8045-99bc-45d5-8372-c855f8c58c7a":{"name":"code","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ft19_Zj.LsU.7CDuqYkS.ajlE2MJ2HCE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cfec8045-99bc-45d5-8372-c855f8c58c7a.png"},"c981bb2e-ff1f-4a13-b02f-006674d05b15":{"name":"username","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GwgyMTu3F0amUGMHaqEnCdLGxqaWbn70","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c981bb2e-ff1f-4a13-b02f-006674d05b15.png"},"3ea403c2-bda7-466a-a65d-81ebd82d6d8b":{"name":"peu","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6aoM1CZX2UzqN6s4.XotziUSHQWDNBw8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3ea403c2-bda7-466a-a65d-81ebd82d6d8b.png"},"83cca678-2e16-465b-8af4-763d8bc1be94":{"name":"lvlmenu","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ECKa0N.1kP.oimPsYTsRtUfDXCKcRtHj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/83cca678-2e16-465b-8af4-763d8bc1be94.png"},"e5f0c5da-2aec-4209-83f6-64e63004f43a":{"name":"lm1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"b0g23ZAm9tZGk6rrvz1gLM6.965fndRE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e5f0c5da-2aec-4209-83f6-64e63004f43a.png"},"36d2f233-5b4e-48a8-a2cd-4ed1bd8e0160":{"name":"lm2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"D85IUd5nhTHxONSq8bc.CAeeaKjOyZky","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/36d2f233-5b4e-48a8-a2cd-4ed1bd8e0160.png"},"49ffcd37-7074-4402-8e93-b0e746db877e":{"name":"lm3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"eYyYUTu2CgtFL5WvEsKL_j9DCqXFAOua","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/49ffcd37-7074-4402-8e93-b0e746db877e.png"},"8550ac44-95a3-41ec-9a59-a599cadb40f9":{"name":"lvllay","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"191Q9IwDab.6lb_.dsgro0BkEjymP69s","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8550ac44-95a3-41ec-9a59-a599cadb40f9.png"},"b8f27e99-9fd5-4858-b176-c51b968b555f":{"name":"x3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fKD6zkcmSRnVUiBUvDrzWHiejom042l1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b8f27e99-9fd5-4858-b176-c51b968b555f.png"},"93661ed5-f525-4fb0-bd62-691fc98f7298":{"name":"ao1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0yqlq4oNIOmsmZF668TyqimSfIVSOGXj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/93661ed5-f525-4fb0-bd62-691fc98f7298.png"},"cc9c610c-8109-44ab-bc20-679c6a0f13e2":{"name":"clc1","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/cc9c610c-8109-44ab-bc20-679c6a0f13e2.png","frameSize":{"x":257,"y":220},"frameCount":1,"looping":true,"frameDelay":4,"version":"RwO3_VtGC.PZvpX6bgnQI4_bmjqNS8Tx","loadedFromSource":true,"saved":true,"sourceSize":{"x":257,"y":220},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/cc9c610c-8109-44ab-bc20-679c6a0f13e2.png"},"c5e0fd59-b98a-4264-a051-ad8605d0a1c8":{"name":"opc1","sourceUrl":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/c5e0fd59-b98a-4264-a051-ad8605d0a1c8.png","frameSize":{"x":153,"y":146},"frameCount":1,"looping":true,"frameDelay":4,"version":"vFLZyQcOtV1GHg_WSOYuRTJ6UQt_v1eO","loadedFromSource":true,"saved":true,"sourceSize":{"x":153,"y":146},"rootRelativePath":"assets/v3/animations/h9MU3CoTi5A7dcLhVJBPtdYfUoQJRDZWxliUHaIRYyM/c5e0fd59-b98a-4264-a051-ad8605d0a1c8.png"},"759ab8ab-16af-4b44-a22d-bd3786c4ddeb":{"name":"bbci","sourceUrl":"assets/api/v1/animation-library/gamelab/PYmxgeNSNCYRIAkJ2sJh7IFAgfIPLXpt/category_animals/birdside_15.png","frameSize":{"x":394,"y":200},"frameCount":1,"looping":true,"frameDelay":2,"version":"PYmxgeNSNCYRIAkJ2sJh7IFAgfIPLXpt","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":200},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PYmxgeNSNCYRIAkJ2sJh7IFAgfIPLXpt/category_animals/birdside_15.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var BG1 = createSprite(200, 200);
BG1.setAnimation("BG1");
BG1.visible = 0;

var wf1 = createSprite(373,206,10,10)
wf1.visible =0


var BG2 = createSprite(200, 200);
BG2.setAnimation("BG2");
BG2.visible = 0;

var lvlmenu = createSprite(187,59, 300, 300);
lvlmenu.setAnimation("lvlmenu");
lvlmenu.visible = 0;
lvlmenu.scale = 1;

var lvllay = createSprite(200,200, 300, 300);
lvllay.setAnimation("lvllay");
lvllay.visible = 0;
lvllay.scale = 3.9

var lm1 = createSprite(85,100, 300, 300);
lm1.setAnimation("lm1");
lm1.visible = 0;
lm1.scale = 2.23

var lm2 = createSprite(185,100, 300, 300);
lm2.setAnimation("lm2");
lm2.visible = 0;
lm2.scale = 2.23

var lm3 = createSprite(285,100, 300, 300);
lm3.setAnimation("lm3");
lm3.visible = 0;
lm3.scale = 2.23

var ao1 = createSprite(200,200, 300, 300);
ao1.setAnimation("ao1");
ao1.visible = 0;
ao1.scale = 4



var opc1 = createSprite(200,200, 300, 300);
opc1.setAnimation("opc1");
opc1.visible = 0;
opc1.scale = 1.5
var clc1 = createSprite(200,200, 300, 300);
clc1.setAnimation("clc1");
clc1.visible = 0;
clc1.scale = 1

var bbci = createSprite(200,190, 300, 300);
bbci.setAnimation("bbci");
bbci.visible = 0;
bbci.scale = 0.5




var xyz= 0



/////// SHop

var shop = createSprite(36,75, 300, 300);
shop.setAnimation("shop");
shop.visible = 0;
shop.scale = 1;





//var sc2p = createSprite(36, 219, 10, 10);
//sc2p.setAnimation("Green Bird Play");
//sc2p.visible = 1;
//sc2p.scale = 0.15prompt()

var sc1p = createSprite(36, 219, 10, 10);
sc1p.setAnimation("Red Bird Play");
sc1p.visible = 0;
sc1p.scale = 0.15;




var shopL = createSprite(277, 219, 10, 10);
shopL.setAnimation("shopLL");
shopL.visible = 0;
shopL.scale = 0.39;

var p5 = createSprite(200, 200, 10, 10);
p5.setAnimation("Poor5");
p5.visible = 0
p5.scale = 3;

var shopC1 = createSprite(68,240, 15, 15);
shopC1.setAnimation("Red Bird");
shopC1.visible = 0;
shopC1.scale = 0.17;

//var shopC2 = createSprite(220,200, 15, 15);
//shopC2.setAnimation("Green Bird");
//shopC2.visible = 0;
//shopC2.scale = 0.3;

///// Shop
var coin1 = createSprite(211, 102, 10, 10);
coin1.setAnimation("coin1");
coin1.visible = 0;
coin1.scale = 0.7;
var coin2 = createSprite(326, 188, 10, 10);
coin2.setAnimation("coin2");
coin2.visible = 0;
coin2.scale = 0.7;
var coin3 = createSprite(34, 96, 10, 10);
coin3.setAnimation("coin3");
coin3.visible = 0;
coin3.scale = 0.7;
var coin4 = createSprite(42,333, 10, 10);
coin4.setAnimation("coin4");
coin4.visible = 0;
coin4.scale = 0.7;
var coin5 = createSprite(236, 281, 10, 10);
coin5.setAnimation("coin5");
coin5.visible = 0;
coin5.scale = 0.7;


var x = createSprite(373,147, 10, 10);
x.setAnimation("x");
x.visible = 0;
x.scale = 2;

var x3 = createSprite(375,25, 10, 10);
x3.setAnimation("x3");
x3.visible = 0;
x3.scale = 1.2;
var code = createSprite(277,64, 300, 300);
code.setAnimation("code");
code.visible = 0;
code.scale = 1;

var peu = createSprite(169,320, 10, 10);
peu.setAnimation("peu");
peu.visible = 0;
peu.scale = 2;

var username = createSprite(169,320, 10, 10);
username.setAnimation("username");
username.visible = 0;
username.scale = 2.5;

var x2 = createSprite(289,109, 10, 10);
x2.setAnimation("x2");
x2.visible = 0;
x2.scale = 2;

var ojfill = createSprite(280,175,10,10);
ojfill.setAnimation("Oj fill");
ojfill.visible = 1;
ojfill.scale = 5;


var GB1 = createSprite(36, 219, 10, 10);
GB1.setAnimation("GB1");
GB1.visible = 0;
GB1.scale = 0.15;
var lvl2 = createSprite(220, 300, 1000, 1000);
lvl2.setAnimation("Next LVL");
lvl2.visible = 0;
lvl2.scale = 0.15;
var SH1 = createSprite(139, 174);
SH1.setAnimation("SH1");
SH1.scale = 0.1;
SH1.visible = 0;
var SH2 = createSprite(185, 242);
SH2.setAnimation("SH2");
SH2.scale = 0.1;
SH2.visible = 0;
var SH3 = createSprite(299, 179);
SH3.setAnimation("SH3");
SH3.scale = 0.1;
SH3.visible = 0;
var SH4 = createSprite(140, 74);
SH4.setAnimation("SH4");
SH4.scale = 0.1;
SH4.visible = 0;
var SH5 = createSprite(85, 314);
SH5.setAnimation("SH5");
SH5.scale = 0.1;
SH5.visible = 0;
var SH6 = createSprite(236, 76);
SH6.setAnimation("SH6");
SH6.scale = 0.1;
SH6.visible = 0;

////////////////////////// LVl 2

var WH1 = createSprite(139, 174);
WH1.setAnimation("WH1");
WH1.scale = 0.1;
WH1.visible = 0;
var WH2 = createSprite(139, 174);
WH2.setAnimation("WH2");
WH2.scale = 0.1;
WH2.visible = 0;
var WH3 = createSprite(139, 174);
WH3.setAnimation("WH3");
WH3.scale = 0.1;
WH3.visible = 0;
var WH4 = createSprite(139, 174);
WH4.setAnimation("WH4");
WH4.scale = 0.1;
WH4.visible = 0;
var WH5 = createSprite(139, 174);
WH5.setAnimation("WH5");
WH5.scale = 0.1;
WH5.visible = 0;
var WH6 = createSprite(139, 174);
WH6.setAnimation("WH6");
WH6.scale = 0.1;
WH6.visible = 0;
var WH7 = createSprite(139, 174);
WH7.setAnimation("WH7");
WH7.scale = 0.1;
WH7.visible = 0;




var Wall1 = createSprite(380, 185, 10, 500);
Wall1.visible = 0;
//var Load = createSprite(200, 200, 10000, 10000);
//Load.shapeColor = "Orange";
var Start = createSprite(200, 200, 15, 15);
Start.scale = 0.1;
Start.setAnimation("Start");

//var WallBOUNCE = createSprite(380, 185, 10, 500);
//WallBOUNCE.visible = 0;
var Win1 = createSprite(200, 200);
Win1.setAnimation("Win1");
Win1.scale = 0.35;
Win1.visible = 0;
var Reset1 = createSprite(358, 366);
Reset1.setAnimation("Reset1");
Reset1.scale = 0.1;
Reset1.visible = 0;




SH1.velocityX = 0.5;
  SH1.velocityY = 0.7;
  SH2.velocityX = 0.3;
  SH2.velocityY =  - 0.7;
  SH3.velocityX =  - 0.5;
  SH3.velocityY = 0.3;
  SH4.velocityX =  - 0.5;
  SH4.velocityY =  - 0.7;
  SH5.velocityX = 0.3;
  SH5.velocityY = 0.5;
  SH6.velocityX = 0.8;
  SH6.velocityY = + 0.1;
  wf1.velocityX = -0.5
  var coin = 0
  

function draw() {
  background("orange");
  textSize(20);
  stroke("blue");
  text("Click Start To Start The Game",58,27);
  text("Coins"+coin,210,121);
  createEdgeSprites();
    SH1.bounceOff(edges);
   SH2.bounceOff(edges);
   SH3.bounceOff(edges);
   SH4.bounceOff(edges);
   SH5.bounceOff(edges);
   SH6.bounceOff(edges);

   
   if(GB1.isTouching(coin1)) {
     coin1.visible = 0
     coin1.x = 401
     coin1.y = 401
     coin=coin+1
   }
   
    if(GB1.isTouching(coin2)) {
     coin2.visible = 0
     coin2.x = 401
     coin2.y = 401
     coin=coin+1
   }
   
    if(GB1.isTouching(coin3)) {
     coin3.visible = 0
     coin3.x = 401
     coin3.y = 401
     coin=coin+1
   }
   
    if(GB1.isTouching(coin4)) {
     coin4.visible = 0
     coin4.x = 401
     coin4.y = 401
     coin=coin+1
   }
   
    if(GB1.isTouching(coin5)) {
     coin5.visible = 0
     coin5.x = 401
     coin5.y = 401
     coin=coin+1
   }
     
     
   
  if (keyDown("w")) {
    GB1.y = GB1.y - 2;
  }
  if (keyDown("s")) {
    GB1.y = GB1.y + 2;
  }
if (keyDown("d")) {
    GB1.x = GB1.x + 2;
  }
  if (keyDown("a")) {
    GB1.x = GB1.x - 2;
  }
  if (GB1.isTouching(SH1)) {
    GB1.x = 36;
    GB1.y = 219;
  }
  if (GB1.isTouching(SH2)) {
    GB1.x = 36;
    GB1.y = 219;
  }
  if (GB1.isTouching(SH3)) {
    GB1.x = 36;
    GB1.y = 219;
  }
  if (GB1.isTouching(SH4)) {
    GB1.x = 36;
    GB1.y = 219;
  }
  if (GB1.isTouching(SH5)) {
    GB1.x = 36;
    GB1.y = 219;
  }
  if (GB1.isTouching(SH6)) {
    GB1.x = 36;
    GB1.y = 219;
  }
  if (GB1.collide(Wall1)) {
    GB1.x = 36;
    GB1.y = 219;
    Win1.visible = 1;
    lvl2.visible =1;
     SH1.velocityY = 0;
  SH2.velocityX =0;
  SH2.velocityY = 0;
  SH3.velocityX = 0;
  SH3.velocityY = 0;
  SH4.velocityX =  0;
  SH4.velocityY = 0;
  SH5.velocityX = 0;
  SH5.velocityY = 0;
  SH6.velocityX = 0;
  SH6.velocityY = 0;
   SH1.velocityX = 0;
  SH1.velocityY = 0;
  if (keyDown("w")) {
    GB1.y = GB1.y = 0;
  }
  if (keyDown("s")) {
    GB1.y = GB1.y = 0;
  }
if (keyDown("d")) {
    GB1.x = GB1.x = 0;
  }
  if (keyDown("a")) {
    GB1.x = GB1.x = 0;
  }
  }
  if (mousePressedOver(lvl2)){
    BG2.visible =1;
    Win1.visible = 0;
    lvl2.visible = 0;
    SH1.velocityX = 1;
  SH1.velocityY = 5;
  SH2.velocityX = 5;
  SH2.velocityY =  - 5;
  SH3.velocityX =  - 5;
  SH3.velocityY = 0.5;
  SH4.velocityX =  - 1;
  SH4.velocityY =  - 3;
  SH5.velocityX = 4;
  SH5.velocityY = 0.6;
  SH6.velocityX = 0.3;
  SH6.velocityY = + 2;
  coin = 0
  }
  
  ///////// Shop Choosing
  if(mousePressedOver(shop)) {
    shopC1.visible = 1
    //shopC2.visible = 1
    shopL.visible = 1
    GB1.visible = 0
    BG1.visible=0
    BG2.visible = 0
    x.visible =1
    code.visible = 1
    
  SH1.visible = 0
  SH2.visible = 0
  SH3.visible = 0
  SH4.visible = 0
  SH5.visible = 0
  SH6.visible = 0
  
  coin1.visible =0
    coin2.visible =0
    coin3.visible =0
    coin4.visible =0
    coin5.visible =0
 ojfill.visible = 0
  }
  
  
  if(mousePressedOver(x)){
    shopL.visible =0 
    shopC1.visible=0
    x.visible = 0
    BG1.visible = 1
    
    
    SH2.visible = 1
  SH3.visible = 1
  SH4.visible = 1
  SH5.visible = 1
  SH6.visible = 1
  GB1.visible = 1
    coin1.visible =1
    coin2.visible =1
    coin3.visible =1
    coin4.visible =1
    coin5.visible =1
    code.visible = 0
  }
  
  
  
  
if(coin ===5  && mousePressedOver(shopC1) ){
 p5.visible = 0
 x2.visible = 0
code.visible = 0
    GB1.visible = 0
    shopC1.visible = 0
    //shopC2.visible = 0
    BG1.visible =1
    sc1p.visible = 1
    shopL.visible = 0
    sc1p.x = GB1.x;
    sc1p.y = GB1.y;
    SH1.visible = 1
  SH2.visible = 1
  SH3.visible = 1
  SH4.visible = 1
  SH5.visible = 1
  SH6.visible = 1
  coin1.visible =1
    coin2.visible =1
    coin3.visible =1
    coin4.visible =1
    coin5.visible =1
    x.visible = 0
 
  

} 

if(coin < 5&& mousePressedOver(shopC1)){
  p5.visible = 1;
 x2.visible = 1
 shopL.visible = 1
 BG1.visible = 0
}




if (mousePressedOver(x2)){
  p5.visible =0
  x2.visible= 0
  code.visible=0
}


 
 

  
  
  
  
  
  
  
 // if (mousePressedOver(shopC2)){
   // GB1.visible = 0
   // shopC1.visible = 0
   // shopC2.visible = 0
   // sc2p.visible = 1
   // shopL.visible = 0
   // sc2p.x = 36;
   // sc2p.y = 219;
   // SH1.visible = 1
  //SH2.visible = 1
  //SH3.visible = 1
 // SH4.visible = 1
 // SH5.visible = 1
 // SH6.visible = 1
  
  ///}
    
  if (keyDown("w")) {
    sc1p.y = sc1p.y - 5;
  }
  if (keyDown("s")) {
    sc1p.y = sc1p.y + 5;
  }
if (keyDown("d")) {
    sc1p.x = sc1p.x + 5;
  }
  if (keyDown("a")) {
    sc1p.x = sc1p.x - 5;
  }
  
  //if (keyDown("w")) {
  //  sc2p.y = sc2p.y - 2;
 // }
  //if (keyDown("s")) {
  //  sc2p.y = sc2p.y + 2;
  //}
//if (keyDown("d")) {
  //  sc2p.x = sc2p.x + 2;
 // }
// if (keyDown("a")) {
  //  sc2p.x = sc2p.x - 2;
  //}
  
  ///////// Shop Chosing
  
  
  ////////////// Reset
  if (mousePressedOver(Reset1)) {
    Win1.visible = 0;
     GB1.x = 36;
    GB1.y = 219;
    SH1.x = 139;
    SH1.y = 174;
    SH2.x = 185 ;
    SH2.y = 242  ;
    SH3.x = 299;
    SH3.y = 179;
    SH4.x = 140;
    SH4.y =  74;
    SH5.x = 85;
    SH5.y =  314;
    SH6.x = 236;
    SH6.y =  76;
    SH1.velocityX = 0.5;
  SH1.velocityY = 0.7;
  SH2.velocityX = 0.3;
  SH2.velocityY =  - 0.7;
  SH3.velocityX =  - 0.5;
  SH3.velocityY = 0.3;
  SH4.velocityX =  - 0.5;
  SH4.velocityY =  - 0.7;
  SH5.velocityX = 0.3;
  SH5.velocityY = 0.5;
  SH6.velocityX = 0.8;
  SH6.velocityY = + 0.1;
  }
  
  
 
 
  //////////////////////////////////////// lvl menu
  
  
  
  /////////////////////////////////////// lvl menu
  
  //////////// Code Hack
  
    if (keyWentDown("C")){
    var ec = prompt("Enter code")
    
if(ec === "coin5"){
  coin = coin+5
}

if(ec ==="Red Bird"){
  p5.visible = 0
 x2.visible = 0
code.visible = 0
    GB1.visible = 0
    shopC1.visible = 0
    //shopC2.visible = 0
    BG1.visible =1
    sc1p.visible = 1
    shopL.visible = 0
    sc1p.x = GB1.x;
    sc1p.y = GB1.y;
    SH1.visible = 1
  SH2.visible = 1
  SH3.visible = 1
  SH4.visible = 1
  SH5.visible = 1
  SH6.visible = 1
  coin1.visible =1
    coin2.visible =1
    coin3.visible =1
    coin4.visible =1
    coin5.visible =1
    x.visible = 0
}

if(ec === "lvl 2"){
  BG2.visible =1;
    Win1.visible = 0;
    lvl2.visible = 0;
    SH1.velocityX = 1;
  SH1.velocityY = 5;
  SH2.velocityX = 5;
  SH2.velocityY =  - 5;
  SH3.velocityX =  - 5;
  SH3.velocityY = 0.5;
  SH4.velocityX =  - 1;
  SH4.velocityY =  - 3;
  SH5.velocityX = 4;
  SH5.velocityY = 0.6;
  SH6.velocityX = 0.3;
  SH6.velocityY = + 2;
  coin = 0;
}
if(ec === "lmt"){
  //// broken
  ///// make sure to make the lvl menu visible in the if start function at the bottom
  lvlmenu.visible =1
  if(mousePressedOver(lvlmenu)){
    lm1.visible = 1
    lm2.visible = 1
    lm3.visible = 1
    lvllay.visible = 1
    shop.visible =0
    GB1.visible = 0
    BG1.visible=0
    BG2.visible = 0
    x3.visible =1
    
    
  SH1.visible = 0
  SH2.visible = 0
  SH3.visible = 0
  SH4.visible = 0
  SH5.visible = 0
  SH6.visible = 0
  
  coin1.visible =0
    coin2.visible =0
    coin3.visible =0
    coin4.visible =0
    coin5.visible =0
 ojfill.visible = 0
 if(ec === "cp"){
   ///// broken make sure to make all things visible at the top
   if(wf1.isTouching(clc1)){
   clc1.visible =0
   if(opc1.visible = 1){
   bbci.visible =1
 }
 }
 
 }
  }
  
  
  if(mousePressedOver(x3)){
    lvllay.visible =0
    lm1.visible =0
    lm2.visible =0
    lm3.visible =0
    x3.visible = 0
    BG1.visible = 1
    shop.visible =1
    
    
    SH2.visible = 1
  SH3.visible = 1
  SH4.visible = 1
  SH5.visible = 1
  SH6.visible = 1
  GB1.visible = 1
    coin1.visible =1
    coin2.visible =1
    coin3.visible =1
    coin4.visible =1
    coin5.visible =1
   
    
  }
  
  if(mousePressedOver(lm1)){
    ao1.visible = 1
    
    
  }
}
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //if(keyWentDown("U")){
   // var name = prompt(" Enter Username")
    //username.visible = 0
   // if(name === ""&& mousePressedOver(Start)){
   // peu.visible =1
 // }
    
 // }
  //// Code Hack
  
  
  
  
  ////////////////// STart BUTTON
  if (mousePressedOver(Start)) {
    lvlmenu.visible = 0
    Win1.visible = 0;
    Start.visible = 0;
    shop.visible = 1
    coin1.visible =1
    coin2.visible =1
    coin3.visible =1
    coin4.visible =1
    coin5.visible =1
    BG1.visible = 1;
    GB1.visible = 1;
    SH1.visible = 1;
    SH2.visible = 1;
  SH3.visible = 1;
 SH4.visible = 1;
     SH5.visible = 1;
     SH6.visible = 1;
     ojfill.visible = 0
    GB1.x = 36;
    GB1.y = 219;
    SH1.x = 139
    SH1.y = 174
    SH2.x = 185 
    SH2.y = 242  
    SH3.x = 299
    SH3.y = 179
    SH4.x = 140
    SH4.y =  74
    SH5.x = 85
    SH5.y =  314
    SH6.x = 236
    SH6.y =  76
    Reset1.visible = 1;
  }
  //if (SH1.isTouching(WallBOUNCE)) {
//SH1.velocityX = -0.7;
//SH1.velocityY = 0.2;
 // }
 // if (SH2.isTouching(WallBOUNCE)) {
  // SH2.velocityX = -0.7;
//SH2.velocityY = 0.2;
 // }
  //if (SH3.isTouching(WallBOUNCE)) {
 //  SH3.velocityX = -0.7;
//SH3.velocityY = 0.2;
  //}
 // if (SH4.isTouching(WallBOUNCE)) {
 //   SH4.velocityX = -0.7;
//SH4.velocityY = 0.2;
 // }
 // if (SH5.isTouching(WallBOUNCE)) {
  // SH5.velocityX = -0.7;
//SH5.velocityY = 0.2;
 // }
  //if (SH6.isTouching(WallBOUNCE)) {
//  SH6.velocityX = -0.7;
//SH6.velocityY = 0.2;
//  }
SH1.bounceOff(Wall1);
SH2.bounceOff(Wall1);
SH3.bounceOff(Wall1);
SH4.bounceOff(Wall1);
SH5.bounceOff(Wall1);
SH6.bounceOff(Wall1);
  SH1.bounceOff(leftEdge);
    //Obb1.bounceOff(leftEdge);
   //Ob2.bounceOff(leftEdge);
  // Obb2.bounceOff(leftEdge);
 //  Obb3.bounceOff(leftEdge);
  // 
//   Ob1.bounceOff(rightEdge);
   // Obb1.bounceOff(rightEdge);
   //Ob2.bounceOff(rightEdge);
//   Obb2.bounceOff(rightEdge);
   //Obb3.bounceOff(rightEdge);
   
   
   
  drawSprites();
}

















//SH1.bounceOff(WallBOUNCE);
  //SH2.bounceOff(WallBOUNCE);
 // SH3.bounceOff(WallBOUNCE);
 // SH4.bounceOff(WallBOUNCE);
 // SH5.bounceOff(WallBOUNCE);
//  SH6.bounceOff(WallBOUNCE);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
