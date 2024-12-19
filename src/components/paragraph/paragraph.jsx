import PropTypes from 'prop-types';

const Paragraph = ({ textColor = 'plum', textTransform = 'uppercase', showChanges }) => {

    return (

        <div
            style={{ color: textColor , textTransform: textTransform }}
            onClick={() => showChanges(textColor, textTransform)}
        >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusantium sit! Sequi beatae ipsum at eos dolores, corrupti ea? Perferendis eos id accusantium voluptates doloremque quidem alias. Fugiat, molestias illum! </p>


        </div>

    )

}


Paragraph.propTypes = {
    textColor: PropTypes.string,
    textTransform: PropTypes.string,
    showChanges: PropTypes.func.isRequired
}

export default Paragraph;