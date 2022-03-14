import EventContainer from './EventContainer/EventContainer';

export default function () {
    return (
        <div className='events-container'>
            <div className="list">

                <EventContainer
                    key={0}
                    image={require('../../../../assets/images/anom.jpeg')}
                    title="Hackathon"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={7}
                    image={require('../../../../assets/images/ulase.png')}
                    title="Hackathon"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={1}
                    image={require('../../../../assets/images/gach.gif')}
                    title="To The Gym"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={2}
                    image={require('../../../../assets/images/joker.gif')}
                    title="Митинг"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={3}
                    image={require('../../../../assets/images/ponos.gif')}
                    title="Утренняя прогулка с Евгением"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={4}
                    image={require('../../../../assets/images/shelbi.gif')}
                    title="Бизнес-тренинг Томаса Шелби"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={5}
                    image={require('../../../../assets/images/yuza.gif')}
                    title="Стрим Юзи"
                    date="Mar 5th 2022"
                    time="21:00"
                />

                <EventContainer
                    key={6}
                    image={require('../../../../assets/images/crusade.gif')}
                    title="Deus Vult"
                    date="Mar 5th 2022"
                    time="21:00"
                />

            </div>
        </div>

    );
}