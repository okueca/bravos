class Member < ApplicationRecord
    belongs_to :team
    enum role: {
        Tecnico: 0,
        Jogador: 1
    }
end
