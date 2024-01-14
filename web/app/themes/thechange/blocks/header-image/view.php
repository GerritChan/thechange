<section class="header-image container bg-none">

        <div class="header-image-container">

            <picture>
                <source srcset="<?= $images['mobile_webp']; ?>" media="(max-width: 500px)" type="image/webp" />
                <source srcset="<?= $images['mobile']; ?>" media="(max-width: 500px)" />
                <source srcset="<?= $images['desktop_webp']; ?>" type="image/webp" />
                <img src="<?= $fields['image']['url']; ?>" loading="eager" />
            </picture>

            <?php if (!empty($fields['text'])) { ?>
                <div class="header-image-text-wrapper">
                    <div class="header-image-text-container">
                        <?= $fields['text']; ?>
                    </div>
                </div>
            <?php } ?>

        </div>

</section>