<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEST Netpeak Group</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body class="body">
    <!-- Header -->
    <header class="header">
        <div class="header-menu__popup">
            <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15H0V12.5H15V15ZM22.5 8.75H0V6.25H22.5V8.75ZM15 2.5H0V0H15V2.5Z" fill="#231D4F" />
            </svg>
        </div>
        <nav class="header__nav">
            <div class="header__logo">
                <a href="#"><img src="img/logo.png" alt="Logo"></a>
            </div>
            <div class="header__join">Join Now</div>
        </nav>
    </header>
    <!-- Main -->
    <main class="wrapper">
        <!-- Promo -->
        <section class="promo">
            <h1>Plans & Pricing</h1>
            <div class="promo-body">
                <p class="promo__text">
                    Whether your time-saving automation needs are large or small,
                    we're here to help you scale.
                </p>
                <div>
                    <div class="promo__switch">
                        <div id='month' class="promo__switch--on">MONTHLY</div>
                        <div id='year' class="promo__switch--off">YEARLY</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Proupose -->
        <section class="proupose">
            <h1 hidden>Price</h1>
            <div class="proupose-cards">
                <!-- Card 1 -->
                <div class="card">
                    <div class="card__content">
                        <div class="card__price">$
                            <span id="starter">19</span>
                            <span class="card__price--unit">/month</span>
                        </div>
                        <h2 class="card__name">Starter</h2>
                        <p class="card__description">
                            Unleash the power of automation.
                        </p>
                        <ul class="card__list">
                            <li class="card__list--service">Multi-step Zaps</li>
                            <li class="card__list--service">3 Premium Apps</li>
                            <li class="card__list--service">2 Users team</li>
                        </ul>
                    </div>
                    <div class="card__wrapper--button">
                        <button class="card__button">Choose plan</button>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <div class="card__content">
                        <div class="card__price">$
                            <span id="professional">54</span>
                            <span class="card__price--unit">/month</span>
                        </div>
                        <h2 class="card__name">Professional</h2>
                        <p class="card__description">
                            Advanced tools to take your work to the next level.
                        </p>
                        <ul class="card__list">
                            <li class="card__list--service">Multi-step Zaps</li>
                            <li class="card__list--service">Unlimited Premium</li>
                            <li class="card__list--service">50 Users team</li>
                            <li class="card__list--service">Shared Workspace</li>
                        </ul>
                    </div>
                    <div class="card__wrapper--button">
                        <button class="card__button">Choose plan</button>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="card card-active">
                    <div class="card__header">
                        <span class="card__header--message">MOST POPULAR</span>
                    </div>
                    <div class="card__content">
                        <div class="card__price">$
                            <span id="company">89</span>
                            <span class="card__price--unit">/month</span>
                        </div>
                        <h2 class="card__name">Company</h2>
                        <p class="card__description">
                            Automation plus enterprise-grade features.
                        </p>
                        <ul class="card__list">
                            <li class="card__list--service">Multi-step Zaps</li>
                            <li class="card__list--service">3 Premium Apps</li>
                            <li class="card__list--service">Unlimited Users Team</li>
                            <li class="card__list--service">Advanced Admin</li>
                            <li class="card__list--service">Custom Data Retention</li>
                        </ul>
                    </div>
                    <div class="card__wrapper--button">
                        <button class="card__button card__button--active">Choose plan</button>
                    </div>

                </div>
            </div>
        </section>
    </main>
    <script src="./js/main.js"></script>
</body>

</html>