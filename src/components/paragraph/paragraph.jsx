import PropTypes from 'prop-types';

const Paragraph = ({ textColor = 'plum', textTransform = 'uppercase'}) => {

    return (

        <div
            style={{ color: textColor, textTransform: textTransform }}        >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusantium sit! Sequi beatae ipsum at eos dolores, corrupti ea? Perferendis eos id accusantium voluptates doloremque quidem alias. Fugiat, molestias illum! </p>

        </div>

    )

}


Paragraph.propTypes = {
    textColor: PropTypes.string,
    textTransform: PropTypes.string,
}

export default Paragraph;