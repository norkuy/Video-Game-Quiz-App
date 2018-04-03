// Create array of objects containing all data for the quiz app.
(function() {
        class currState {
            constructor() {
                this.correct = 0;
                this.incorrect = 0;
                this.idx = 0;
                this.total = 10;
                this.currRound = 1;
                this.lastAchievement = '';
                this.quizQuestions = [{
                        questionNumber: 1,
                        question: 'What was the first home video game console?',
                        userChoice: '',
                        correct: 'Magnavox Odyssey',
                        correctImg: 'https://i.imgur.com/ID3zUTn.jpg',
                        correctImgAlt: 'Maganavox Odyssey Home Console',
                        choices: {
                            a1: 'Magnavox Odyssey',
                            a2: 'Nintendo Entertainment System (NES)',
                            a3: 'Atari 7800',
                            a4: 'Sega Genesis'
                        }
                    },
                    {
                        questionNumber: 2,
                        question: 'The Italian plumber, Mario, made his video game debute in which game?',
                        userChoice: '',
                        correct: 'Donkey Kong',
                        correctImg: 'https://i.imgur.com/MHJiFuC.gif',
                        correctImgAlt: 'Donkey Kong Video Game',
                        choices: {
                            a1: 'Super Mario Bros.',
                            a2: 'Donkey Kong',
                            a3: 'Super Mario 64',
                            a4: 'Super Mario Sunshine'
                        }
                    },
                    {
                        questionNumber: 3,
                        question: 'The most popular video game based on sales is?',
                        userChoice: '',
                        correct: 'Tetris',
                        correctImg: 'https://i.imgur.com/bdGu0C8.gif',
                        correctImgAlt: 'Tetris Video Game',
                        choices: {
                            a1: 'Call of Duty: Modern Warfare 2',
                            a2: 'The Sims',
                            a3: 'Grand Theft Auto: San Andreas',
                            a4: 'Tetris'
                        }
                    },
                    {
                        questionNumber: 4,
                        question: 'What year was Street Fighter II released?',
                        userChoice: '',
                        correct: '1991',
                        correctImg: 'https://i.imgur.com/khp0bpc.gif',
                        correctImgAlt: 'Street Fighter 2 Video Game',
                        choices: {
                            a1: '2000',
                            a2: '1991',
                            a3: '1985',
                            a4: '1981'
                        }
                    },
                    {
                        questionNumber: 5,
                        question: 'Which one of these is the most expensive video game collectors can buy?',
                        userChoice: '',
                        correct: 'Gamma Attack: (Atari 2600)',
                        correctImg: 'https://i.imgur.com/hImsGDV.jpg',
                        correctImgAlt: 'Gamma Attack Video Game',
                        choices: {
                            a1: 'Air Raid (Atari 2600)',
                            a2: '1990 Nintendo World Championships: GD',
                            a3: 'Tetris (Sega Genesis / Mega Drive)',
                            a4: 'Gamma Attack: (Atari 2600)'
                        }
                    },
                    {
                        questionNumber: 6,
                        question: 'The game programmer, John Carmack, worked on which game?',
                        userChoice: '',
                        correct: 'Doom',
                        correctImg: 'https://i.imgur.com/ULvenLR.gif',
                        correctImgAlt: 'Doom Video Game',
                        choices: {
                            a1: 'Doom',
                            a2: 'Duke Nukem 3D',
                            a3: 'Call of Duty: Black Ops',
                            a4: 'Metal Gear Solid'
                        }
                    },
                    {
                        questionNumber: 7,
                        question: 'This game is inconsidered the worst in gaming history by many:',
                        userChoice: '',
                        correct: 'E.T. the Extra-Terrestrial',
                        correctImgAlt: 'E.T. the Extra-Terrestrial Video Game',
                        correctImg: 'https://i.imgur.com/JxGmpAA.gif',
                        choices: {
                            a1: 'Bubsy 3D',
                            a2: 'Catfight',
                            a3: 'E.T. the Extra-Terrestrial',
                            a4: 'Shaq Fu'
                        }
                    },
                    {
                        questionNumber: 8,
                        question: 'Which of these multiplayer games was developed by Blizzard Entertainment?',
                        userChoice: '',
                        correct: 'World of Warcraft',
                        correctImg: 'https://i.imgur.com/ex7YpDP.gif',
                        correctImgAlt: 'World of Warcraft Video Game',
                        choices: {
                            a1: 'Counter Strike',
                            a2: 'Minecraft',
                            a3: 'World of Warcraft',
                            a4: 'Destiny 2'
                        }
                    },
                    {
                        questionNumber: 9,
                        question: 'Game Boy was a handheld gaming console created by which company?',
                        userChoice: '',
                        correct: 'Nintendo',
                        correctImg: 'https://i.imgur.com/iBC40pv.gif',
                        correctImgAlt: 'Game Boy Handheld Gaming Console',
                        choices: {
                            a1: 'Sega',
                            a2: 'Nintendo',
                            a3: 'Microsoft',
                            a4: 'Disney'
                        }
                    },
                    {
                        questionNumber: 10,
                        question: 'The quote, "It\'s dangerous to go alone! Take this.", is used in which game?',
                        userChoice: '',
                        correct: 'The Legend of Zelda',
                        correctImg: 'https://i.imgur.com/0tUKJhL.gif',
                        correctImgAlt: 'The Legend of Zelda Video Game',
                        choices: {
                            a1: 'The Witcher',
                            a2: 'Half Life',
                            a3: 'The Legend of Zelda',
                            a4: 'Minecraft'
                        }
                    },
                    {
                        questionNumber: 11,
                        question: 'You\'re Jack, and you enter an underwater city called Rapture. Defeat Big Daddies and kill or rescue Little Sisters',
                        userChoice: '',
                        correct: 'BioShock',
                        correctImg: 'https://i.imgur.com/vgkQsFO.jpg',
                        correctImgAlt: 'BioShock Video Game',
                        choices: {
                            a1: 'BioShock',
                            a2: 'Call of Duty: WWII',
                            a3: 'Metro 2033',
                            a4: 'Battlefield 1'
                        }
                    },
                    {
                        questionNumber: 12,
                        question: 'You play Nathan Drake in this Naughty Dog game',
                        userChoice: '',
                        correct: 'Uncharted 4: A Thief\'s End',
                        correctImg: 'https://i.imgur.com/e7RmY1W.jpg',
                        correctImgAlt: 'Uncharted 4: A Thief\'s End Video Game',
                        choices: {
                            a1: 'Final Fantasy XV',
                            a2: 'Overwatch',
                            a3: 'Uncharted 4: A Thief\'s End',
                            a4: 'ARK: Survival Evolved'
                        }
                    },
                    {
                        questionNumber: 13,
                        question: 'This Assassin\'s Seed game takes place in Egypt',
                        userChoice: '',
                        correct: 'Assassin\'s Seed: Origins',
                        correctImg: 'https://i.imgur.com/n1rRZfd.jpg',
                        correctImgAlt: 'Assassin\'s Seed: Origins Video Game',
                        choices: {
                            a1: 'Assassin\'s Seed: Unity',
                            a2: 'Assassin\'s Seed: Syndicate',
                            a3: 'Assassin\'s Seed: Origins',
                            a4: 'Assassin\'s Seed: Rogue'
                        }
                    },
                    {
                        questionNumber: 14,
                        question: 'This 1984 classic is centered on motocross racing',
                        userChoice: '',
                        correct: 'Excitebike',
                        correctImg: 'https://i.imgur.com/gIVuhOR.gif',
                        correctImgAlt: 'Excitebike Video Game',
                        choices: {
                            a1: 'Star Fox',
                            a2: 'Mega Man',
                            a3: 'Frogger',
                            a4: 'Excitebike'
                        }
                    },
                    {
                        questionNumber: 15,
                        question: 'Which country is Lara Croft from in the the hit game "Tomb Raider"?',
                        userChoice: '',
                        correct: 'England',
                        correctImg: 'https://i.imgur.com/i1nsXRz.jpg',
                        correctImgAlt: 'Lara Croft from Tomb Raider',
                        choices: {
                            a1: 'England',
                            a2: 'France',
                            a3: 'U.S.A.',
                            a4: 'Japan'
                        }
                    }
                ]
            }
            next(amount) {
                this.idx = this.idx + amount;
            }
            newTotal() {
                this.currRound === 1 ? this.total = 10 : this.total = 15;
            }
            updateRound() {
                return this.currRound === 1 ? this.currRound = 2 : this.currRound = 1;
            }
            questionIndicatorNext() {
                if (this.idx % 2 !== 0) {
                    $('.question-indicator h2').removeClass();
                    $($('.question-indicator h2')[Math.ceil((this.idx / 2) - 1)]).addClass('current');
                }
            }
            setAchievement() {
                this.lastAchievement = this.rank();
                $('.achievements h2.current').empty().html(this.lastAchievement);
            }
            rank() {
                if (this.correct >= 12) {
                    return 'Legend Status';
                } else if (this.correct >= 7) {
                    return 'Champion Status';
                } else if (this.correct >= 4) {
                    return 'Journeyman Status';
                } else if (this.correct < 4) {
                    return 'None';
                }
            }
        }
    
        class decideOnSlide {
            showIntro() {
                return `<section class="intro-screen">
                          <header>
                            <h1 class="text-center">Welcome to the Video Game Quiz App!</h1>
                            <h2 class="text-center">This quiz will test your knowledge of video game
                            history and popular games.</h2>
                            <h2 class="text-center">Click the button below to get started</h2>
                         </header>
                         <form>
                           <button type="submit" class="continue">START QUIZ</button>
                         </form>
                       </section>`;
            }
            showEnd(state) {
                state.setAchievement();
                return `<section role="region" class="play-again-screen">
                          <section role="region">
                            <h2 class="text-center">${state.correct} out of ${state.total}</h2>
                            <h2 class="text-center">${state.rank() !== 'None' ? 'Achievement Unlocked!' : ''}</h2>
                            <h2 class="text-center">${state.rank() !== 'None' ? state.rank() : ''}</h2>
                            <h2 class="text-center">Click below to play a bonus round!</h2>
                         </section>
                         <form>
                          <button type="submit" class="play-again" value="Play again?">PLAY AGAIN WITH BONUS ROUND?</button>
                        </form>  
                      </section>`;
            }
            showQuestion(state) {
                let currentQuestion = state.quizQuestions[Math.ceil((state.idx / 2) - 1)];
                return `<section role="region" class="question-screen">
                        <section role="region" class="form-box">
                        <header role="banner">
                            <h2 class="text-center">${currentQuestion.question}</h2>
                        </header>
                        <form>
                        <fieldset name="question-${currentQuestion.questionNumber}-choices">
                          <label for="answer-1">
                            <button role="button" id="answer-1" class="color-1" value="${currentQuestion.choices.a1}">
                              <span class="highlighted"></span>
                           </button>
                           <input aria-hidden="true" type="radio" name="q${currentQuestion.questionNumber}a1" value="${currentQuestion.choices.a1}">
                           ${currentQuestion.choices.a1}
                         </label>
                         <label for="answer-2">
                           <button role="button" id="answer-2" class="color-2" value="${currentQuestion.choices.a2}">
                             <span class="highlighted"></span>
                           </button>
                           <input aria-hidden="true" type="radio" name="q${currentQuestion.questionNumber}a2" value="${currentQuestion.choices.a2}">
                           ${currentQuestion.choices.a2}
                         </label>
                         <label for="answer-3">
                           <button role="button" id="answer-3" class="color-3" value="${currentQuestion.choices.a3}">
                            <span class="highlighted"></span>
                           </button>
                          <input aria-hidden="true" type="radio" name="q${currentQuestion.questionNumber}a3" value="${currentQuestion.choices.a3}">
                          ${currentQuestion.choices.a3}
                        </label>
                        <label for="answer-4">
                          <button role="button" id="answer-4" class="color-4" value="${currentQuestion.choices.a4}">
                           <span class="highlighted"></span>
                         </button>
                         <input aria-hidden="true" type="radio" name="q${currentQuestion.questionNumber}a4" value="${currentQuestion.choices.a4}">
                              ${currentQuestion.choices.a4}
                              </label>
                             </fieldset>
                            <div class="text-center"><button class="continue" type="submit">CHECK ANSWER</button></div>
                         </form>
                        </section>
                        <section role="region" class="more-info">
                            <div class="stats">
                                <h3 class="text-center error"></h3>
                                <h3 class="text-center">Question: ${currentQuestion.questionNumber} out of ${state.total}</h3>
                                <h3 class="text-center">Correct: ${state.correct}, Incorrect: ${state.incorrect}</h3>
                            </div>
                        </section>
                    </section>`;
            }
            showAnswer(state, isAnswerCorrect) {
                let currentQuestion = state.quizQuestions[Math.ceil((state.idx / 2) - 1)];
                return `<section role="region" class="answer-screen">
                          <section role="region" class="answer-txt">
                            <h3 class="text-center">${ isAnswerCorrect ? 'You\'re correct! (◕‿-)' : 'Sorry (╥_╥) incorrect!' }</h3>
                            <h3 class="text-center">${ isAnswerCorrect ? '' : 'You guessed ' + currentQuestion.userChoice }</h3>
                            <h3 class="text-center">${ isAnswerCorrect ? '' : 'The correct answer is ' + currentQuestion.correct }</h3>
                           <form>
                            <button type="submit" class="continue" value="CONTINUE">CONTINUE</button>
                          </form>
                        </section>
                        <section role="region" class="correct-answer-img-box"></section>    
                      </section>`;
            }
            slideDecided(state, evaluateAnswer) {
                let whatToShow = '';
                if (state.idx === 0) {
                    whatToShow = this.showIntro();
                } else if (state.idx === 21 && state.currRound === 1 || state.idx === 31 && state.currRound === 2) {
                    whatToShow = this.showEnd(state);
                } else if (state.idx % 2 === 0) {
                    whatToShow = this.showAnswer(state, evaluateAnswer(state));
                } else if (state.idx % 2 !== 0) {
                    whatToShow = this.showQuestion(state);
                }
                return whatToShow;
            }
        }

        class start {
            init(state, whatToRender) {
                this.imagesLoad(state);
                this.render(whatToRender);
                this.setUpHeader(state);
                state.setAchievement();
            }
            render(whatToRender) {
                $('.main-box').empty().html(whatToRender);
            }
            setUpHeader(state) {
                let slides = state.total;
                let numbers = '';
                for (let i = 0; i < state.total; i++) {
                    numbers += `<h2>${state.quizQuestions[i].questionNumber}</h2>`;
                }
                console.log(numbers);
                $('.question-indicator-contain').empty().append(numbers);
            }
            initHandlers(state, evaluate, decide, setUpHeader) {
                $('.main-box').on('click', 'button[type=submit].play-again', event => {
                    event.preventDefault();
                    state.correct = 0;
                    state.incorrect = 0;
                    state.idx = 0;
                    state.updateRound();
                    state.newTotal();
                    setUpHeader(state);
                    this.render(decide.slideDecided(state, evaluate.evaluateAnswer));
    
                });
    
                $('.main-box').on('click', 'button[type=submit].continue', event => {
                    event.preventDefault();
                    console.log(state.idx);
                    if (evaluate.checkifNoSelection(state)) {
                        evaluate.errorMessage(state);
                        return false;
                    }
                    state.next(1);
                    state.questionIndicatorNext();
                    this.render(decide.slideDecided(state, evaluate.evaluateAnswer));
                    this.loadPreloadedImages(state);
                });
                $('.main-box').on('click', 'label', function(event) {
                    event.preventDefault();
                    $('form label > input[type="radio"]').prop('checked', false);
                    $('span.highlighted').removeClass('on');
                    $(this).find('span.highlighted').addClass('on');
                    $(this).find('input[type="radio"]').prop('checked', true);
                });
            }
            imagesLoad(state) {
                function preLoad(state) {
                    var images = [];
                    for (var i = 0; i < state.quizQuestions.length; i++) {
                        images.push($("<img class='answer-img' />").attr("src", state.quizQuestions[i].correctImg).attr("alt", state.quizQuestions[i].correctImgAlt));
                    }
                    return images;
                }
                return preLoad(state);
            }
            loadPreloadedImages(state) {
                if (state.idx % 2 === 0) {
                    $('.correct-answer-img-box').append(this.imagesLoad(state)[Math.ceil((state.idx / 2) - 1)]);
                }
            }
        }
    
        class evaluateIt {
    
            errorMessage(stats) {
                $('.error').empty().html('MUST SELECT AN ANSWER');
            }
            checkifNoSelection(stats) {
                if ($('input[type="radio"]').length !== 0 && $('input[type="radio"]:checked').length === 0) {
                    return true;
                }
            }
            evaluateAnswer(state) {
                let currentQuestion = state.quizQuestions[Math.ceil((state.idx / 2) - 1)];
                currentQuestion.userChoice = $('input[type="radio"]:checked').val();
    
                if (currentQuestion.userChoice === currentQuestion.correct) {
                    state.correct++;
                    return true;
                } else {
                    state.incorrect++;
                    return false;
                }
            }
        }
    
        function beginQuiz() {
            const begin = new start();
            const state = new currState();
            const decide = new decideOnSlide();
            const evaluate = new evaluateIt();
            begin.init(state, decide.slideDecided(state, evaluate.evaluateAnswer));
            begin.initHandlers(state, evaluate, decide, begin.setUpHeader);
        }
    
        $(beginQuiz());  
    
    })();