import React from 'react';

export default function IconoSVG(props) {

    function tipoSVG(tipo) {
        switch (tipo) {
            case 'flecha-izquierda':
                return <path d="M213.1 438.1c4.3-6.6 9.3-13 15.3-18.8.7-.7 1.7-.9 2.4-1.5L611 43.3c44.8-44.4 117.4-44.4 162.3 0 44.8 44.4 44.8 116.4 0 160.7L472.5 500.3l300.8 296.3c44.7 44.3 44.7 116.1 0 160.3-44.7 44.2-117.1 44.2-161.8 0L240.7 591.7c-4.6-3.3-9.8-5.1-14-9.2-39.7-39.3-44.1-100.1-13.6-144.4z" />
                
            case 'flecha-derecha':
                return <path d="M786.9 561.9c-4.3 6.6-9.3 13-15.3 18.8-.7.7-1.7.9-2.4 1.5L389 956.7c-44.8 44.4-117.4 44.4-162.3 0-44.8-44.4-44.8-116.4 0-160.7l300.8-296.2-300.8-296.3c-44.7-44.3-44.7-116.1 0-160.3 44.7-44.3 117.1-44.3 161.8 0l370.8 365.1c4.6 3.3 9.8 5.1 14 9.2 39.7 39.3 44.1 100.1 13.6 144.4z" />
                ;
            case 'chat':
                return  <svg viewBox="10 -60 50 50">
                            <path transform="rotate(-100 0 0)" d="M25.52 20.09C13.63 20.09 4 29 4 40a18.9 18.9 0 0 0 4.23 11.9 2.46 2.46 0 0 1 .44 2.19l-1.22 4.48a.83.83 0 0 0 1 1l6.14-1.68a2.55 2.55 0 0 1 1.7.14A22.84 22.84 0 0 0 25.52 60C37.4 60 47 51 47 40s-9.6-19.91-21.48-19.91Z" />
                        </svg>
                ;
            case 'telefono':
                return   <svg viewBox="0 0 1000 1000">
                            <path d="M900.7 162.5c-75.8-87.5-184-130.2-291.4-126l-2.5 33.8c98.9-5 199.1 33.6 268.7 114 71.6 82.6 94.8 190.6 72.9 290l34 2.4c22.3-107.9-4-224.5-81.7-314.2zm-302.4 25.1-2.4 34.2c60.1-9.2 123.6 11.5 166.2 60.8 44.6 51.5 55.2 120.8 34.1 180.9l34.2 2.4c21-68.9 7.6-146.7-43.1-205.2-48.8-56.2-120.2-81.2-189-73.1zm176.2 564.3s-95.4-65.7-137.6-95.1c-16.2-11.3-32.7-17-48.9-17-22.4 0-36.2 11.2-39.5 14.3-.1.1-7.9 9-25.5 24.4-16.9 14.8-41.9 12-61.6-6.9-25.1-24.3-164.5-202.2-208.1-262.7-8.8-12.2-12.2-23.2-10.5-33.8 3.6-21.7 28.5-39.5 42-49.1l4.7-3.4c27.1-20 30.1-54.7 21.3-78.5-5.8-15.8-62.1-140.4-68.9-154.2-8-16.5-21.2-35.5-52.6-35.5-17.9 0-64.6 7.2-94.6 29.3L88 88.5c-27.4 19.1-78 55.1-78 130.6 0 95.9 69.2 238.3 211.6 435.5 152.2 210.8 333.4 309.1 408 309.1 68.3 0 134.4-86.5 155.8-128.5 20.4-40.3 2.8-71.3-10.9-83.3z" />
                        </svg>
                ;
            case 'email':
                return   <svg viewBox="0 0 1000 1000">
                            <path d="M990 850H10V150h980v700zm-70-490L675 535v-70l245-105V220H80v140l245 105v70L80 360v420h840V360z" />
                            <path d="M598.6 394c-7.6 72.2-11.3 118.7-11.3 139.2 0 24.5 6.9 36.8 20.4 36.8 14.1 0 25.4-9 34.4-27.1 8.9-18.1 13.4-41.2 13.4-69.4 0-39.8-12.7-72.5-38.2-97.9-25.3-25.3-60.5-38-105.8-38-47.8 0-87.6 16.8-119.3 50.3-31.8 33.5-47.6 74.3-47.6 122.3 0 47.3 14.3 84.4 42.8 111.6 28.6 27 67.4 40.5 116.5 40.5 37.9 0 72.2-7.2 103.3-21.5v45.8c-28.2 12.2-65 18.3-110 18.3-61.6 0-111.4-17.8-149.7-53.3-38.3-35.5-57.4-82.8-57.4-142.1 0-60.8 20.4-111.8 61.2-153 40.8-41 93.4-61.5 157.7-61.5 60 0 108.5 16.2 145.4 48.6 37 32.5 55.6 74.8 55.6 127.1 0 42.9-11.3 77.3-33.7 103.5-22.4 26-50 38.9-82.9 38.9-16 0-29.3-4.4-40-13.3-10.6-8.8-16.1-20.9-16.7-36H535c-11.5 32.9-33 49.4-64.3 49.4-23.2 0-41.6-8.4-55.7-25.1-13.9-16.8-20.9-39.8-20.9-69.4 0-38.2 9.7-69.2 29.2-93.2 19.4-23.9 43-36 70.9-36 25.3 0 41 9.9 47.2 29.8h1.3c.4-3.9.6-8 1.1-12.2.4-4.2.9-8.5 1.3-13h53.5zM447.8 519c0 16.8 3.4 30 9.9 39.5 6.7 9.8 15.8 14.6 27.3 14.6 16.7 0 29.8-9 39.5-27.1 9.5-18 14.5-41.7 14.5-71.3 0-14.5-3.4-25.8-10-33.7-6.6-8.1-15.5-12-26.7-12-15.8 0-28.9 8.8-39.1 26.4-10.3 17.7-15.4 38.9-15.4 63.6z" />
                        </svg>
                ;
            case 'direccion':
                return   <svg viewBox="0 0 1000 1000">
                            <path d="M483.1 654.3c3.8 5.6 10.2 9 16.9 9 6.8 0 13.1-3.4 16.9-9l192.8-286.7c23-36.7 35.2-78.8 35.2-121.9C745 115.8 635.1 10 500 10c-135.1 0-245 105.8-245 235.8 0 43.1 12.2 85.3 35.7 122.6l192.4 285.9zM500 132.5c67.7 0 122.5 54.8 122.5 122.5S567.7 377.5 500 377.5 377.5 322.7 377.5 255 432.3 132.5 500 132.5zM59 434.7V990l261.3-32.7V529.4l-79.1-117.6L59 434.7z" />
                            <path d="M500 728.7c-28.6 0-55.1-14.1-71.1-37.8l-59.6-88.6v355L630.7 990V602.3l-59.5 88.5c-16 23.7-42.6 37.9-71.2 37.9zM749.3 426l-69.6 103.5V990L941 957.3V402l-191.7 24z" />
                        </svg>
                ;


            default:
              return 'No icon';
          }
      }

    return (
        <svg {...props} x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
            {tipoSVG(props.tipo)}
        </svg>
    );
}