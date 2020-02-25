import dump1 from '../images/Job2/Dump1.jpg'
import dump2 from '../images/Job2/Dump2.jpg'
import flatten1 from '../images/Job2/Flatten1.jpg'
import flattened from '../images/Job2/Flattened.jpg'
import after from '../images/Job2/After.jpg'
// eslint-disable-next-line 
import after2 from '../images/Job2/After2.jpg'
import after3 from '../images/Job2/After3.jpg'

import skidSteer from '../images/Job1/SkidSteerLevel.jpg'

const ImageLibrary = () => { 
    let images = {};

    let Job1 = [
        {
            src : skidSteer,
            desc : 'Frank Goulding Leveling out the ground'
        }
    ];

    let Job2 = [
        {
            src : dump1,
            desc : 'Description of Image'
        },
        {
            src : dump2,
            desc : 'Description of Image'
        },
        {
            src : flatten1,
            desc : 'Description of Image'
        },
        {
            src : flattened,
            desc : 'Description of Image'
        },
        {
            src : after,
            desc : 'Description of Image'
        },
        
        {
            src : after3,
            desc : 'Description of Image'
        },
    ]

    images['Job1'] = Job1;
    images['Job2'] = Job2;
    return images;
}

export default ImageLibrary;