<?php include "functions.php";


// echo "<pre>";
// print_r($_SERVER);
// die();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Madrasah</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="assets/img/favicon.png" />
    <!-- font family css -->
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- font icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" />
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' rel='stylesheet'>
    <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet" />
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' rel='stylesheet'>
    <!-- all css -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/owl.theme.default.min.css" />
    <!-- <link rel="stylesheet" type="text/css" href="assets/css/sass/style.css" /> -->
    <?php if($_LAN != 'ar'): ?>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/page-navigate.css" />
    <?php else: ?>
        <link rel="stylesheet" type="text/css" href="assets/css/style-rtl.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/page-navigate-rtl.css" />
    <?php endif; ?>
    <link rel="stylesheet" type="text/css" href="assets/css/rtl.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/audio-player.css" />
    <style>
        <?php
        if ('bl' == $_LAN) {
            echo "body{font-family: 'Hind Siliguri', sans-serif;}";
        }

        if ('ar' == $_LAN) {
            echo "body{direction: rtl;}";
        } 
        ?>
    </style>
</head>

<!-- <img id="preloader" src="https://static.impression.co.uk/2014/05/loading1.gif" alt="Loading..." style="top:30%;left:30%;margin-right:auto;z-index:999;position:absolute;display:none;"> -->

<body class="mr-main-wrapper">
    <div id="preloader">
        <img src="https://static.impression.co.uk/2014/05/loading1.gif" alt="Loading..." style="top:30%;left:30%;margin-right:auto;z-index:999;position:absolute;display:none;">
    </div>
    <header class="mr-header-wrap mr-header">
        <!-- header top bar  -->
        <?php include "top-header.php" ?>


        <!-- header middle bar -->
        <?php include "middle-header.php" ?>

        <!-- header menu bar  -->
        <?php include "menu-header.php" ?>
    </header>





    <!-- <div id="all-pages-contents" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/leaves-pattern.png');"> -->
    <!-- <div id="all-pages-contents" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/subtle_white_feathers.png');"> -->
    <!-- <div id="all-pages-contents" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/concrete-texture.png');"> -->
    <div id="all-pages-contents" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/dust_scratches.png');">
        <section page="home"> <?php include "pages/home.php" ?> </section>
        <section page="introduction" class="container"> <?php include "pages/introduction.php" ?> </section>
        <section page="education" class="container"> <?php include "pages/education.php" ?> </section>
        <section page="admission" class="container"> <?php include "pages/admission.php" ?> </section>
        <section page="examination" class="container"> <?php include "pages/examination.php" ?> </section>
        <section page="fatua" class="container"> <?php include "pages/fotua.php" ?> </section>
        <section page="audio" class="container"> <?php include "pages/audio.php" ?> </section>
        <section page="notice" class="container"> <?php include "pages/notice.php" ?> </section>
        <section page="donation" class="container"> <?php include "pages/donation.php" ?> </section>
        <section page="contact" class="container"> <?php include "pages/contact.php" ?> </section>
    </div>

    <!-- Footer  -->
    <?php include "footer.php" ?>

    <div class="copy-to-clip">
        <p>কপি করা হয়েছে <i class='bx bxs-right-arrow'></i></p>
    </div>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.carousel.js"></script>
    <script src="assets/js/custom.js"></script>
    <script>
        const php_url_params = {
            query_string: " ",
            baseUrl: "<?php echo $_baseUrl ?>",
            page: "<?php echo $_PAGE ?>",
            sub1: "<?php echo $_SUB1 ?>",
            sub2: "<?php echo $_SUB2 ?>",
            sub3: "<?php echo $_SUB3 ?>",
            lan: "<?php echo $_LAN ?>",
            forErrMsg: "<?php echo $_forErrMsg ?>"
        };
    </script>
    <script src="assets/js/pages/functions.js"></script>
    <script src="assets/js/pages/menu-navigation.js"></script>
    <script src="assets/js/pages/page_by_page_controll.js"></script>
    <script src="assets/js/pages/--examination.js"></script>
    <script src="assets/js/pages/--fatua.js"></script>
    <script src="assets/js/pages/--audio.js"></script>
    <script src="assets/js/audio-player.js"></script>
    <script src="assets/js/form-control.js"></script>

</body>

</html>