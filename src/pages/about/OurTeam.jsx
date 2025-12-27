import React from 'react'
import { teams } from '../../data/our-team'

function OurTeam() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h2
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    Meet Our Team
                </h2>
                <p
                    className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    Passionate individuals working together to transform
                    agriculture and food distribution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {
                    teams.map(team => (
                        <div key={team.id} className="text-center">
                            <img
                                src={team.image}
                                alt={team.role}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3
                                className="text-xl font-semibold text-gray-900 dark:text-white mb-1"
                            >
                                {team.name}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 mb-2">
                                {team.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {team.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurTeam