<?php
wp_enqueue_script('counter.waypoints-js', 'http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js', '1.0.0', true);
wp_enqueue_script('counter-js', get_template_directory_uri() . '/assets/js/jquery.counterup.min.js', array('jquery'), '1.0.0', true);
?>