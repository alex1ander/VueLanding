<template>
    <section class="information-section dark-style overflow-visible white-style container">
        <svg class="background-svg">
            <use href="#circle"></use>
        </svg>

        <div class="content">


            <div class="two-part-content mobile-column">

                <div class="info-wrapper" style="flex:4;">
                    <div class="info">
                        <h2>Залишились питання?</h2>
                        <div class="section-text">
                            <p>Якщо у Вас виникли питання чи Ви хочете отримати консультацію, залиште дані у формі. І ми з радістю з вами зв’яжемось.</p>
                        </div>
                    </div>
                </div>


                <form class="wpcf7-form" style="flex:6;">

                    <div class="this-input-block">
                        <label for="name">Ваше ім’я:</label>
                        <input type="text" id="name" name="name" placeholder="Ваше ім’я:" required>
                    </div>
                    <div class="this-input-block">
                        <label for="phone">Ваш телефон:</label>
                        <input type="tel" id="phone" name="phone" placeholder="+38 ____ ___ ___" required>
                    </div>



                    <button type="submit" class="btn-160-circle reverse-style">Отримати консультацію</button>
                </form>


            </div>

        </div>

    </section>
</template>

<script>
</script>