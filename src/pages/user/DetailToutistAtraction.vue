<template>
    <div class="container user-page-detailTA">
        <h1>Bến Ninh Kiều</h1>
        <p class="card-text">Xếp hạng
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
        </p>
        <h4>Giới thiệu về Bến Ninh Kiều</h4>
        <div class="user-introProvince">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcVFRQXGBcaGxsbHBsbGxsdGxobHBogGxsaGxccIiwkIB0pIRobJTYlKS4wNTMzGiI5PjkyPSwyMzABCwsLEA4QHhISHjMqJCkyMjIyMjQyMjUyMjIyMjIyMjIyMjI0NDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEYQAAIBAwMBBgQEAgkBBQkBAAECEQADIQQSMUEFEyJRYXEGMoGRQlKhsSPRFDNicoKSweHwFSRDY6LxBxc0RFOjstLTFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAQQCAgICAwEAAAAAAAABAhESAyExQRNRBGEicZGhscHRMv/aAAwDAQACEQMRAD8A0oWu7akiuha9XI8PEiiu7adtpwFFhiRsMV2Kcy10ClZWIyKQWpNtdC0WJRI9tdAolEWpUYcVDmbR0b5YFFd21ZLs8h9qeGzU+X6NF8f7KvbXYq1CjkRPtT2cHJUGl5fopfH+yniprNgtxR9zTI3p7daW0LgcUnqWtgjoNPfgi/6fjDZqN9G44INGI4p4eetZ+SRt449FWlxveo25q1Vo6ChtUgI3RBrSM1fBlPTdcgJpU+K5Fa2c9CBru813ux0NcCZqbTNKkh63TXGuUVZ0isOc+f8AtXDoo/FUZRNK1AZblSreohNMhEcH0pz6RIgc+dS5RKUZka5zt/WpESfSgXQoc07vzRi+g8iXISy+dda2OaCN9q6uoNPCQvLEne30qJGA5FNN6o3ckzTUWKWpHoNtFG5ok2E6VTKSKl/pBpOD6HHVj2F3NNnBxUPGKi/pLedc740KMuxeSL4I1Wulab3y+YrnfL+YVpZjgOiuRTf6Qn5hSF9PzCixYj9s05LXrTO8XzFNtPtGWH3pNsuMFW4QLRqdLC9SaD/pC/nH3pf0hfzj70nky0oroKuaePlP3rp0zc4qBdUv5x+lOGqX84/SpuQ8YjthHnXVc03+kp+daYdQp/EKOeR/+eGFJcNO7+g+9X8w+9d79fzL9xSxH5Ao3xTBfFD94v5h9xS71fzD708UHkZMbwNOW7Q/er+Yfeu94v5h96MULNhYvedMu3pERQ/eL+YfenLcT8w+9LFIbm3sciltru9fzD70hcT8wq8iFAbFKKh12rCbdu0ljGScYnpVZe7UdgNjBJ67HJ9ORj7UWDikXKXIODUwvHrWY0dpjcQtd3Q0xtYTEnOI860IdfzD70ml2OMn0Si4ehpy3j51Gl1ByV+9SHUW4/DUtfRab9jmeeSKGcCcU5nTzH3pm9fMfeqjsZz3ORSinbh5j70tw8x96uzPEZFKKduHmPvS3DzH3osMRsUop24eY+9ckeY+9FhiciuRTpHmPvXN48x96LDEp2a3H9VmBAxLHjBnPqOcHFcRyozb5MHyk5/DMYHlGKXZ+luLbFq5cnO5YBDYBDcngSP0qwt6JlUgpcO5txLs24xx8uI9BWLmdcdP7RTXigklXPHyiTn0gR9aG0qS4V7bQRO0sAy55iQSP5HyrUXtBvj+HJjPzDI6AKRx/Kn6js9TaO9SSMlSzLkeLBHGJNLyMPGvZnX0ADDY8+mQB6Zn9alXTuV394wDEQRBXb+HIals08G4Llze2CoIJXrH4TxAmaA1+qKhe6XdbUAZB3j/AADnHWaptvsm4qyx1HZt0SVuoYzG5pwMjI5+tBhroOUx/afp1iGBI/nVO3aVttwuXCsGIAcRGOpicMPSan0Oq08FVukTMtJLe2ceXSaqL9smSVWi3t3L747tFGQSxiB/akk/UcwaK2XQ23babpIbBxzEz+nNB6TW2XdUt3Np2kEkeEqpEiWIE5H6+VGJ8QqS6pph3ibYiSWiCx8K7hjMRwcxUSmlwVFJrcZrJVoIhZIBBMmADlSKb2lqdpAUAQPIZn0jpFVvb/brXhZCIyuGY7QpbcDG2OvCmffHoInbKkHvLZd8/MSIXiMcRSU7W46SLlRcif4Y6TB+piIH1opTBJud1AHAnd9cASOvvWfftjbbxbbK5HK7hIJB6iNuB5VzQ/EAIi6gKjJkDygEK3J9vWhzRKSLq7cB+WBz4oWAInIPNShcStwGOTsQ9PQiOOTWTbW94xW2zojN8u3wgNxIUeXvNNdFXwP3pHlGzM4lTNNzXQKLfRpbl0Ow/iTwNoUKfTB6kftR9m3anNzPEYH1IHWsk95CVJd5AESA2MAZEf75rvfKcs7SBgKFVfPIEkn1modtVbRoopPdGpvoeVVGWQBMg9Zkz6frVS/ayqP6tGPGN/n6sOKrtPrNkzdcyIOIOeqtJ2nHNNu31ZiWZsdDxMT0EyY5pqTSJcbLS32qpIDWlAMZl8Dzjdnzqe92paBxbYjmdx+0bqpLet2GUiY5hSfpINMvazedzZJ8go/YCnkxYovrGqFwoVtlBMySSG8LcT5R+tSWkMD2FU+h1OxQxJwSBu4/SMeI0U/xIEfYtkMYGVc5J8hHpTyY8PZaKABLztAMxzEf713TvprmFuEHGCVBz7j1qm1Hbz3FKHSOAwgkFwYmfL0oHT6ZHVbhv20JwEZmkT7L9frQpMmUUaS3f0ssO8bAPiPy/Qjk0XY0Fu4JS4WHmCD/AOlZhdLag77rAgx4V3BhMAiYMdcxQ/eIlzwMYWJPBB+h6enqKM37JxXaNqnZS/nJ9x/Kup2SP/qE/Sshou2drsA77T+V2ncRkmRz/Krq927cdYtiQeoMMP1mPWMTSzfs1UIvgtj2R/4n/lz+9Nfspo8NwD/DP+tZ6927qLZ7tzsMTn5hJByGnEAxjrS//wBNc2Ad54sydqcEYg+menXrQpv2S4xToun7HudLq/5SP9aanZF0f94h9w1Ug+I7xXabibmBAbMwfRfCT6xUI+JdQLklwf7JU7foIqs2RjE0o7MuQZZZ9Jj/APGhz2Zen5rce7f/AK1UL8TX4wyTzlenkI6e9Mb4k1IPzA+mxaS1GDjEt7nZ1+cd3H99v9VqP/p2p/sf5qrbfxbfzKW29c/6HjIp1z4rvY/hW+B1/wB6tTYYpmx1mjZmllATbhtpmTz4ihEEfXAzUCXyuN63IlQSDIJz4gYG4Y6zis1o/iULbZSYYqfEBuKkgiR4gcfTr5wMxpluC+su1y0zLvJldwJ8TkAkhgZMzXFHUjfJ1TlHo3Giv3jd/jqqKAdjbQwBJGI3TGJ58vKKI7c1qC3tS4xbcBEQDOD+I4hj9qE1Go0WnLRbZtrAEsty4Glvw95cIb3H+1M7Z7c0pF21bQNuwrKITgMCM5IbHA8q2tRaM29jKW9Qgb5XU8kq8iRA4PsKWmsW2yjPuQbxu2zjpj7UBqSwY7YIB8gT7efWiewge8bcu2VI4YdROCfStU7dGFU7KvtAl9Q5csNxnGecx+oo7QWbQMsbh5MBVPp1YeQ+1B61SLoMbpE9cQPJY8qtOzhekBLI4XPdufMnJJrOL2NfkrF0gTtTVWo7u0t0OrAln2gTtiIUnoT5c0d2Ro7uotl/C207JghoCjAIYTz1zQnbHZ143HuXERRAMk27cwPyEglunEnFXPwJ2jatrdW42yWVhIxG0z+w+9TlvubRjF6doku2byIVC3QuxguQwUEeIhZwfc+fXNV1q4A4Zwwgcm2Z5mSfMGOZ4jivRdJet3rYuWyGU8GoG06hiGCDy8yOsj+VDpkYmPd7VwkC+FaPymMmZ27vmIxxHpVv2do7TKxdLTwBmWBA4OA0n2Aq31HZVi589tD9BVbf+GNPyjtb9AxArNwXsasDTQWEgJculo5IZf1wf0pDs+2fxA+m5v8AUV0dkBTA1Ib0aDHlgQTn1oxdKxjK8ci2/M+QWK556c3un/oGn6Bh2cBkW0J91b7LwKEvWnlR3W3z8CxHrA9asUv2gCTcDQYkKMH8sTzSu9padZPitkdG8LN/dViC30BpRhqrn/IYWVGssXAkqFZj0XcsDyO5BPPSgdNo2cgNAuHhTOcZz/zrV0va6Rm5u6hQYbPG4MT0joKhXtVSY7i6c8kEr/5V49q1UdT6G4JANzsl1I2lwM8AbVxg/NLHnmOKgt9l3AI8RjPCgngEZb3qDU9tPvdflj1I/U5qO9q3uZ3ZCgQJMwSeSeTP7UlOa2ZDx9Fnc7NfZuX54A27lCxyxMkegj0qvuWLkkd2zQOQPD9/I/60z+nOQu9tqx5kEx1x1zUA1UEuhcwBJBI9uM9P1FUpy9CddIJKMviaVJxG5SZieOeD+tSuiyO6LtgSWVUWesEnpxMj2qFe19sghWMzLKrkHOJeY/mKj1N8sQS5BMx4QBAyR4QM01qVyJ0XfZdtSu+4jDdhWLKyYx4lWSM+flUF/SXNx/h7yOCBxAkAEGP0qov33wA0AKBn0zJ+vljFSnXXcLuO2ADB4A4Htx+lVnfAbEt/S3bZBayyB5hogN5xMZz+tcS4ZhgYOCTj9jn3odm3/jYlRG0yQOuAeB+mam0zD5cGR1Hy+UHkffzozXYv0Raq+J+YsSfLxCMRM+32rknO0AnyIj/Y9andmXAAEjzAx9DQVu5uYtJkHz6eX7VUZprYTRKjtjw5zlQIHSJ8/Sp11IJiZPPUH69KjL9T9ZIHtz15qRL4GMT5ny9T/wA5qm7AiW4WJQLkRgNEjn7099SFWBgznd4ukxIHlUO9i87h5ELMR5TH/IqfU6psQB54jMSOPY0m9xpIa91lXAwclp/9PStFpO27QRRsjGYBIn71n31m+2VcSSdxb1A6xzyeZoIag/8ADQmxtVwy00vY2qucaW8JOSbbAe+QJ96rH3KTuO0gkHzBByI4nkV7A3aVogbrt6cDYjFgIjcIVJGJ+tZ3Vafsq21zfb1LsCWfcjcsZLZXrMyKw8K6NHBGS0GuuXCLACuHO0bmKxIx4iQBwI/Q1ff+7zWM+9H0+0HKm5ckMOnynMR1o+72v2cki32YCyhXBdFK9CPmMzn9KMTW6m6q3BcuBWghV2kKOCsnxQOpOa23aSfXAowjG6MDr7YVyGB6Z9VOcHg4qPscAXlIfqREEcqceXrVh8R22W5cEjcGPMEEtmfF6/vVXoiwuITbgb18QDRkxzMda37TMHaZF8RAgrAIgtBBjy4ihexnD7hcuNAyJBfjGAT6/rVl2/bJuLgMN7eHPlP4SD0pmh0xHjt6UMZxi834ug3+k1nFbs6fkTWKXtItFSxtYJbutCMmQlsTHO6WP6VVdlXIt3SVtNm2fGOCC2VHJwTI9vKrDtXXauyttgFtBhyttFcMcxLS4x1Ecc1WdkpvN0FSxKTukyp7xZYn13ET/aqZsNCDWkzjdsPbVkDlQcEIQo8+BGPf2plu8H8RLfU48hzUt7s+2CAqEyYM8jHMzxM/pXL9ru1gq20dBnHnA6elc82mticS20Osu2wFEFRBhmJ6zEHz4rQ9nduWyYuWbaZwyjH1GTzOawi6wj5g0eccjoaks6pTgyR0zAOOtYxc4b3sFm/+HX23NQGuWzNwlfFJ2kmAJPHHHnV494AT3grzHS2w8C3k8xOQPMscACRz5j0rWafty3aRe9t3AQACYBBjEhpj1raOs3yqLVMl7F0SpbuoxLh3Zox19h6UrvYVkqyi3z5liR7ScfSrLsztrTXsIwVvysNp+k4P0NWJArSMslsx7GWT4btQCoKMOqsQT9Zmu6nsS4VAW/dgGYchxI/vZ/WtNC+lLu6pJrsZ592l2HeuFe8YXdghZZ1YDylt2KBbsQqDFu+vs1u6vvACGvR7mmoZtPHSp/ITx7R5ve0bdbij0uW3T9dpH60Hdt3LYIQI09bbK36AyDjyr1F9MDVVr+xrb5KKT7UXj0JRi+DzMs6GSCDHWibF3we2SfLMT6Vq27Itj8LD2Zv2midLpHQzbuEf3kttP1ZSaT1YSH4jF29QWOST0HMn2onuLwXcLbwRjH6jzrXXWuH+u01m8BwyDZc/dR+polNbpAqo9m7a29fFx5T8pH/BSbT4J8bMVZaBklTnDDPHHMion1TCCAxHnEg9Y4zE16LptVoCwZLuRHLN06EAkR70PqtFoHMgoj8gsQyn3VhkfWq2W7B6aowrNu2tvHBJBJ4njj0NDiACCQQeIImBPJrY6z4SLnfbRnUxHdhoB6mGkBfSaoNf2U9kgQ/MQbZUn68YmnGSWyJarkrd21+u2JHMcdanuu0yPlgEE4AzBE+4o6/pSWAt3EYDMkwTjIg/6edC3LbDDWwB0PufSjydixvZHF3MMOn+E8fTE/ep5aI5HB8x656VVvppOGzPBz+8VYWdA62zcNxPDgKrbmb6KeeP9qe7Wz/onAk3FedoHrFd73+6fWf9qE1KFmDMIIAkKoQLicxGennTA1v8zVm40Nqj0J/jbWF1jaAq+IbVMxMkmARxiKE1/aNy5cLMvidcRbB8WGJMzI5+9Ra8DToGuKbW7CkqRJ5I4xz+lVljti29wW+9Anr0x0kdcRW60a5ZeTO6nVloViQdsRgQfoPSr7sy6jaVZCyCyHcGOZnkQT6esVmtSm64E8ATo43LvM5YyfPy9Opo/sbtv+hG5utC4GXBbABIiYIIMmP+GudzcW4jW+7BtRcN0bmMs0qZEGZgSIw3BOOaAs6QJteYzBJ9PMj2qwv9rHVfxGtqjZU7AACwAJbaMhiP29YAd+ZIA3fiGJgnziD5j611LeCZhJfkN+JIDgnGZnoPDA4zQumv2bjwb/MCNjnzHUAcnzon4mBa3bbMkL4RyTBJxzVLpdDeS6rdxcYAg/I5DcHoJP0pPZv9m04RlFN+jUWtHp3AAt3XIJzCWx0WN0tjHlUnZfZW/W3LBHcb7bFB4yFAC3FJ3ncynZnPnEUZp2vqTvuWtOsiI7tH5LHzuZB6Z5pdnJb/AOrWNrs4uK+8sDDFrVxcSdxGBkgGpkR8aUrcXxRMPhi5gs6sSP8AuwGAIwV3OyTx0HSnabsBBd2vbORySTtIJmEtgj5fFLHoK3qadF4VRUykDiKwyV8HT4/sytrsrS3ba3CNQ5biEtJEDggCCPEIPWKGtfBVtlJDOhk+FthBHQ+Hzq+1/bFnTk94HCwIZULKZnwyMA449aqf/eHophVvN/hUD9WpNZdDqK5YFc7Fu2RAt+HzST0iSR4vvIE1Lo+zjcB8aiPmXlgD5xANT2/jI3fBatYYnaW+YgAyGUYOQYzxFDWg4Zb1sCeHG1h4syNhnwHy3Y9cVqncKWz6JyUZLa12N13YGmCjerTPKDaROflXEe9Xml11pgADOI5z9jmqXtDtEvcCrNohdxVpU4MTu4jMZjj1FCvceQLlsMSYBI2k+zrg1xx05NO3T+juz02/xSaNO5zjP/PKklyl2c62rYgGTyWaf8IMYWma1DcEqzIQZ3KBB/vbvCR9a0hrqqbt/oy1fiytuKpfbJzcqNnrO29e2nJS/dS55MpBb/EikgDy54NF6fti1cMK4+uM+XvW6mvZxO1sy2rjWwaHW561Ir1dBkA3dIJp9vTgdKMIrsVn41ZWQJc0oPSn6bTBanIrq08FYWQXOzrb/NbRvdQaGu/DmmYf1SD2AFWimnTVUFszT/CVsGbbvbPTaxFMOk1tsbbetux5Od4+xrTk1EyTRuKzFavQ6z8a27o/xKT9qr3txi7pLsYzbcTj6E/evRWGKEuWZNSo1wkKo2Yi1qNGoKm5qbU9LiAgekgyPoKEfS2S0reW4I4JIB+pUEe0VvP6Ip5ANVus7EsMc2l+1D/gdLpmJ1tq7kKvh/sAwfWOKBNi4PPOa2Oq+HrKnwl19mP+s0P/ANGPTUXI9xR5Etv9A4NmmR7eqtbzotptsQqXVLNkKSy7lBg44/L6VC73Ut/w7NtWkiIAAXYxVvmjLhRnoai0N/cl5TrO+BBK3FV7e0ZDYIAwfKf1oYNbXTFgzXUjcG5Y+KMEV1R4MZN3uUvaKaltjXQimWjNsQIDfhxPhP6Cnv2c962qIRvP4WMOTJJImPDBiCeh9qt17Rtnue8tkJggsBKHdsghhzBnjIn0o7tn4Ysd9aubzaDkkFICM8A/3QW5kATFYy005WX1ZjNRau6SEuWwsjnkZyM8HypjaxXtmRtOVJGcMsRB6dea0Ha3eFjYOptPsbwm4TndtJVgFOYxI88RUDfBouf1dxAcSEuKR/kuFTA9ya2qlRk92VHa19blq3zKwCYH0Ig+9cTTK3ie4YxwhOJ9SB+Gra/8FX1Bthmc4ytq6VwZHiCxxU1v4O1CqC9u4ykhSFQhoMgmGOAATyBWUpVuxSUnFJdAOhTTpAG+4SYElLa/hU5G84+nJq8XVXHXdaG3YpCbEEgiYh2DNPAkn6Cil7AtWFB2iQ24d9ftWwPFuPhUzGPI8Ci9T2/prYCjUKYnwae2bh8sO+1OfQ1nnJ8IqGmou2/+md0l7tBntm41/Y2W5gLxMqBHEwfOor66i5e8L3GtgkEd4fIDjdP5vtT73xWU8FmxbUDhrp7+4SSTJnwKZ6AYoS7292jckd7eAPAUd2v/AJQBTSlW9FyabDe2+yHNtXAg295bdvLFIGFMGWMdTQ2j+CxBNy8plZGxXMcdIzihf+oa4Ge8v+/eH71Ke0e0SBF7UEk5HeEY3eftUy05S7/ouGpiqpG50GjSxZBtWLl1kQlQLbbnMSAW2ASeJq11mva3sJFu2N0v3rqhC7TwoJbdu2/hOJryzZrXJ7x7pEGN9yRM4xPFSdl9ngN4nUtztUFjz1Y8VEdBLllPWcjR9sduWj3hR1u3HVrW4r3dtLbkB1Td4ncjAJgZwKzNjU3LWLdxrePkuZTLRmcH7Dmk2qWWW5bIUSVJGJmZ4iZ+1Cd8m3wsdsDwHxL83QHryOvSt0oqNEXK7NuO2e77tGZVZsDaFXqROcgYPXpUnZP8RXuXLjELvbc2YG7ABJ+UDg9RWOs9olg7MoZmCiQpJEXA5ifPyH851B7V0dvTtaNy4x24BQCDu3bJk7gMdOnrWWnqwcqSoblKW7Zlu2tYL10Fi21Qe7HBCMCRI8zAPPX1qvNqXw7Yj1XiY9PLNKGvP3hjxQSYgD0Ak9I+lR6/TlQG37ljMQIE4wORB8q5pyT1KsK2Lrsrte5Z8LDAjrwPYHk+1Xuj+JrbHxjYPOZ9civPU1MjMNiAfxDjr1HpRulCtmR0+XOOhzVNy01zsKj1TTapbihkYEHy/wBal31j/hXWBHKF4XM7uOkf6Cf51sggOQQR5j+da6eopKykmOVqkEeVRBa4Sa1QBAiuE0OLhp2+mIc1c3UxnphemDJ5FNKCog9SB6AEbdQvaqcuPvU+ju2gD3hgzAyDmcQOnI5B5FAJFPqNNPSh/wCiitG6WWG1bilvNSDu85EwDxQty0s/NU4pj3RX9hfBxtoQ7hvE5EKwIVtvhgkT8kyR1q41Wg02nsOCQm1S07Ua4FGTtSPfAFYLt3tXUtfKPrtlppVbaNtc7tyBlW2ATmDk8iufBVy263bdu41yZJZ12kkhcwWJI+bn1o3rkp03ZY6XtbS3lazZsXLoMlrl9VBI6C3sO4mYxgjnpWT13arLbGmQ3GCEp4ufBgRHERVxoNZcPd27+stmGCrprar4ScA/wzwJJh5+8Rne2bRTUXQgyLk9BggH+fHnVwlTInG6B1vN8zTM53Hcx9SWkknP2q6t9oLcW3JDFGnOC2IifP1rP32l+VMjOYP3Jio1cA5494PuPOrsylBM2Ot0r93Np7k4gIzCfPk4EetUq6XVOfELvn4rmJ9p/tH/ACio9E/G3UFPRpA+88VZd0SP/jEI/vn6TnzqRxjXAD/0W6cv3ac5ZiYkN7jlqLXT6e3PeXC5z4V8KncZgxz9COaFXTWp8epLkzhBJ4CnImireutoC1q2Fb87+J/ooOD9Vp7A0SPqri/1dlbSDqVgx58SR6kUBc1jQN2qE4nb5/fr7VVa7VO7tuLMCIAmAPWBg5/aglVhwSPalkUol41/y1LEexH+tFW78gf9qAyOpOPKJrO2UbgGMTzHHrT1uOWmTk8e4jgVLY8TSM9rM3WeY+RSCIzhjxx51bdiX0tnetkOplWDGSw2mZP2wJ5+lUWg7EvFy7I7wTCkNtM5MsOAZPB61e6kXFtl7pW1bBEWUb5jgBRBhc8/U1z6mo62Q1GmW9z4UtatQ9prlsAibdySoxMowyRHHPXisH2pbW3qLtpVhbblQD1AMk464n1rY2vijCloUkmGRhhQQF5P09hWe7Y11vUXnurt6S35ysjdtPnI4jgGl5lKN2EqrY52N2azuzbHdQFyFYLkwqhxz06enrVi+rtE90EW1dWcbGZumMQ4xmCT19KhX4lum33YYnAAbMBV4BWIMA8xI5mr/Udhpc0yXbkh13bi+7wkGGKheZj9qScZOq3HFejOdpWnRV3MrDphQSY6bc7QCBDSZk8GhrGoAyVIPOSQpgwMmZBINS9o9mXWbE+EZncw4B6TtwwwarLyXGdbZ3llACyCccgQJlfKPPinKKjK4r+hSjlsyLtW27PIVFVvy+FZzgyTnHtkVHo75D7WkYgiMdP0rU3uwQqS8OkTIiAYlsMJggEnECDxUmi7HLXQbejuXFj5ztFvaf8AxCQvT1OeDNLyPVbUk79jjp4fjxRVaDs67BdE3CSNu4Txjw8xn7Ctt2Lqwri07C0WkqHBBJAHgUDwyBnnPSor2l7l3CtJgE2LARnkebuDBIIwFMRzkVd9mWLpuB/6NatLtje0m9yOWkmOcSM5q4abju2XS6HDUKbjWw3jXleoBmCQRImDTmWi+0NJbeO8USZHeLK3Fxghxn7mKozdeyQubloQu9iBcWMDcB4WHHiwar9FUHlKay05LgIkEEeldY+n2oyZLiDsKjNHpYZvlVj7A0zUWdnzbRkCCwmTwNoM1akS4gYNO3xU6aYkYVj7KR+r7R+vSuXey7jwsbZ5JI468A/vVomiv118qAQVgHIJGZxmff7gfSh7V0t+5cDPvuWmK7banaUKgg+EQCQeeua2dvsC2vidhjPEDH94mOJkRxRVm/bUHYwKDgKJAxOWE596d0thUeXLev7goVltb3wisbqzzMqxwRORV9oO1IQDY+o/tmzdUj+yQoiesj81XXafxNpbc73tAjoWDP54W2GPIHJFUlz/ANolkGALhHmFVR9mYmpKopO21bvwy6RrtxcEy5NsI3W2g89xBJ86j7VBtOQuss2bfh220Vg59NttN8TPzECtJ2jpbXa2puC3du2rQQNcG4KHPy7tskFYjkcluM0Tr+z9CisO+DuUjwAMT3YJD78KHEticyRS42KX6B9P8PjumI/o1m3cO8XCO8vQSGBS4di2z6eOJ5NZH4g7N7hrc3e8dy+cnAIjxSScMOehqz7H74Putgufl4lY9ScCPStPd0Nm/c2szi5tIVjtMMR4pWImcYjirS2szld0meU3tKxOREyRmPt/zrU+nskT3hBaQRvMiOOGkE1pO2uy0s6hrbXQ6KFJIwQSPlOfPOJwek1T9pWLaxcAJB+USfDngT5+8+lcupKUk0hO+ALWacoSwBCYzKkSfReM4qLTPuMKwM+Qkk9BVnoVuFlgbCWXLfKOoLz4QOvtn0rX6DtnUNcL3Llt2VDbUq6uJMS4ZVBkDznmlozlVPlFQipc7GX7O7HZ4Ld6fSAq5z87E9fStLoOzrdsYAUnmDLf5un+GKlDk9akSInA9OtauCfO5VroEfsexybS5/sgUz/oliP6tZ+v25o5bgNQanXbDHd3G9Qog+xJE/SrBtLk5Z7NsL/3Sf5Qf3oq61u1bZyQiKpYkA/SFUczjjrQ+l1S3BuQyBgyCCDMEZHOOlH6TUbZBAZWBVgeoPv16g0ndbDMN2VqFuXAWuNumZbAEZlgJxM8e9d7WvtdvkXHtWxJAdZNqADGfEQDHOcn7H9sdhPp2JsB7tq5DStvcRzIYIvhIyOeoj0qbXZd64pAsXjiR4DC9RuIHlzjoBXPhvd89ENEdm2xXwgnoIEzHzYHsOfOpb/Z122pvNaIttAkllJLTkj/AGjyrRfBVq4rqj22cLulFSfEygA94AVjbtmeI962nauj71RautZt2pBa2F33DBkZBhfpUJVKqKUDzrsy4CF/hlmGQAPCD5vEyciJnr049Q7F12/SI9233ceAqYJEYkqMQfT9qqLFnTWSDbsqWWdrMAAPXu1xOTk07Uat7hyfpwB7CtYabu3/AANKi0bs60wY25UuZL22gz5SZEekVT9p/CAvW/6yLqsDIAVXWZhlGAcGD5yfaS1f7rxbtoxJJAHlmcVa6btgGZtsTAO9RKsTwJmQYg+UVq9iuSrbQWbSsXYo4Py3GG1siCZBmD+JSYp9/tq0j7DcdyYYJacFDDbO7SAGXHincBxxIFEP2HavXO/vXGfcB/D+VV48IiW2yJgGJ5mrNnUCERVHsP2oSS4Byvkbor6RKWRbLdPDuPq5UmT7k0Yti4cs0f2Rj9eaHWwi295kEeLEnjOAOeKi7J7XS+CbdxSAYMjIPSfQ+dS5K6vcRVC32lODpbWTwGYkTg5Bz9aA1fYN8kte1yJOSVQJ+pYD9K03bXZJ1Cqr3LqBSTNlwpMiMypJFZ1vgGw//wA3qQfUof12UmvoRzQaXREj/tW50A8R2Rg/hdlPXoD1qytXtMxIF5nIzCMxIHGe79vbxVRan/2bDazrrXMKTBRTMCeQ1Z1/h+5bYKLneG4rKpKxtcDeMKxmQrLx1FVFu62FTPRX1mkXkbv722f/ALpFA3vjDQ2zlrYZZEb8gGDEWwwzH7VgbGgut+JB/m/aKV74XFxtzXAD12rz9zVSnBLkcYyfRurvxnbPyQePlUHkA/MW/daq7/xS543f4m//AJhT086qtF8PonNx2wB+Ecewmj07NtD8E+5J/SpXyNNLsb05MznbPxNq98IyKOhChn/zvuNBai5qtXbUOLjFSfm3DdMZYsYPGPrW0XSAfKgHsAKedKT0rKXyG3+KLWnXLMPZ+Gbh+cqo9Mn+X61YJ8MWYzuJ85j9IrVLpzUo0/pUZzfY8Yoz/wAKXXXUG3b2F3tt84JwI3QPPK8+hzmtD2N8P2V7l2BcOHgseGEAKFGD+MVn/hPs5rWqt375ZLrjbZsggPtYHNwSAu4TCnkkmMY1+qe2+nt3LSMqKSxW4pBwxLK2xgwPPBg7uuRXZwzAb2ojJptqLFxCGmIQAMfmPTwjisbo+0DLeIs6gQ2SJn5ZPnNa7Tdmm8zbsWuqWw7FyepuXGYYEL/IULpvgYq7sXS1bJOI3uVnG5idqnA4JAqk2TsYn4l01y0e/tsQlz+sWJAfq0HiYwehHrQFvUkDLhyyiRA+ykR18s4r1K9o9D3d2wlwXbtxLgEsXlhbZgceEHwz9K8qNlAVYFgsQdoUhTOJgZHPP3rm1pKD/Yb1Rf8AZV+2u15Fwt+EjdsjJLRgCCPEf0q8s6QFu9e2pIGNrhPDwYJ8JcASAY4561nuwOzdRet3HtXgiWy25WcI5Bg8bTtVioOfI9aM1PbrKr23hjbO0TgE8qYOIEZ4ncJ60ZJxBRp2Ww0zkPcAJtC4VR/zCAQTBxzHlIND3CaH+EviNt7rfYtacbWEHaJONhXwgjyGau+2dALVwrMjkTzB86elO7T5Rb3VlBau3VuMSDtxshCwB2xPhmCCScjyzjCXs65eeW3MTyzByfqzVZ2EYnwKT+w+vH3qyZCB4mA9AZ/bFGpoKbt3/IqT5QNa0gtrBMsYkzPAgQepwM01E9Ke91fIk+tMNw9Mf8+9aqNKkNsItuU6ge5ipW7ScRtuXD6BmUT7/wC1BLaJyaFbtBBbN1FL20cJcI5QH8W05I6TxPl0KsLLRtU7ck/cn9TmmKh9aLt2A2UYMDww9ePOpLxt2hN11HkMyY8lGT9KlyUeSgRLXnR1rSHlgBxGc/aqi928xcLYsmIP8RhCiMncOR9TxWh7A7Xs3T3eBdUckfP5sk9JrFa8XLFMFQHr9TasG2t1WC3MBivgH94nihO19PqGIaxcXuyPkTapJ6sLgwZxjw+9bPU6ZLilLihkPIP86wfa3Y17Qub1gNc05+dOqjzz5fm+/U0aiyVPgCivpdtrB70HmGe4pJ6wSYJ9jFS6TWahR4LtwE/gJ3/fdJ4q2t9ulx3iJ3trG5VHjt+jpBkeo/3qfsu7Zu3FVbAW4ZYQAB4c84zGYjoa4n8eSkqm0LBezalJUCRwuY6gDIn1zxXlXaxfR6svaJEkkA5/EQ6sIAI3AxiIiK9G1Gvaym+4VVeNzREnjIrNdvanSavably34Jgo4Bg8g8+WK6tWnGrp9Doufh/4hW+mMOPmtnkeo/s+tX63UfmAft+tef8AZtrRWCHtv4hwdxY/p+1Wun7Tt3SQrmVzBDKY8wGAkeopw1VSTav6GkWXaGttRttsSdy5BEcyYIM4is12+Itl1aGSGAkCSrA+X0+tW16xlSOpC/U+cVXakFyyeFkUgkqeFRgXB/NMR9a232Y9t0Vpb+Iy7AVk5Bg8mNyxif8AUU8oAOKGU7XgmJ+VcQMnhgMzPE0U12CM9OAM1m47lx4JNPfC4PFWKEeVA2bdthPP70agxQ0gdkhApVyaU0COV2a5NN3UITMR22uo0d5LhBbbcVmu5cSGVtrN0cwOYkQRn5d1oNfduXHBYlCJG1iqhieQpmeowR+1KlXQ+DIWp7ZfS2GElm73uwWMkblDLMz0nnyrLdurfusHvXQRgG2GJUAgkMAYESOekUqVSm8ifYP8I2mbW2WA3bGaSAT4CChkxx4+f50vifs9rLs0K63FA2qSePlwSWMQP0iIpUqWrFMuJZ/DPweLi27y3CyXM7dm2FA6E5Jk7evHoAbfW9j22vWUuW17q1bFu4fDLMqeEpEmCSZmP1NKlSlBNYijyS6nT6Xb3aWttvB2r4dxBBBYjJggdai1mr3sWIBY9SJPsJ4HtSpVailwNgxvE4z/AM9KQRjSpVRKHJYzHtRtvRMfwxSpVEpMcRup7q0u65cVRu2jPJ8o5mmahLOmm6ttmNyJgkIxjBYE7ZPtn3pUq5tXUaT/AEWVlzt243hUC2sfhHv+M46dAOaD1d64ttQGKBgSXYsZeSDLTIwBBnPSlSryYastRvJiQHprbKysHbdmQGZt3PAPOI8zijtXbCspSQ4gnaQNj/2cxPmPcelKlUObrLsaNv8AD/bZuJF0EEQA7RB9YFXwYHmT+32pUq9vReWlFv0DMZ8QfC0E39Ge7uclFOG9hx9Dg+mTUfwjaa5ee5cshXQAd4DEuVgqyg8gE89CK5Sp8PYS5LL4wtXGtqLY3NuDFdwBIUESAcctWKuXWWe8t3Ujncpj/MMUqVc/yNCGosnyNgl3UBwNlxRmcz9vvRdkEhSD4hwVOQeMRz7daVKuHV0FBqiUai0bjrb7wKu0FuoiIzA8xOCcTQfaOvWCiYBPiMwemJ98+wpUq9bJ4ocYq2UzkyIUn9fc+vA6VZIkdJpUqp8GsSNLe4kAlc4Pn96PsqwOSCI+s0qVKXAuyYmmk0qVIDhNM30qVCIZ/9k=" class="user-img-introProvince" alt="">
            <p class="ml-3">
                Du lịch Cần Thơ mà bỏ qua địa danh Bến Ninh Kiều quả là một thiếu sót. Nơi đây được xem là một biểu tượng du lịch, địa điểm vui chơi lý tưởng tại Cần Thơ. Đến Bến Ninh Kiều, bạn sẽ được ngắm nhìn vẻ đẹp của dòng sông Hậu hiền hòa hay check-in tại cầu đi bộ nổi tiếng. Ngoài ra, đây cũng là cơ hội để bạn thưởng thức những món ăn đường phố vô cùng thơm ngon.
                Nhắc đến Bến Ninh Kiều, người ta sẽ nghĩ ngay đến câu hát “Cần Thơ có Bến Ninh Kiều – Có dòng sông đẹp, có nhiều giai nhân”. Nơi đây từ lâu đã gây ấn tượng cho du khách bởi phong cảnh hữu tình và con người chân chất. Ngay bây giờ, hãy cùng Nụ cười Mê Kông ngắm nhìn vẻ đẹp của Bến Ninh Kiều qua clip dưới đây nhé:
            </p>
        </div>
        
        <h4>Địa điểm</h4>
        <p><i class="fa-solid fa-location-dot"></i> 106 Đường Hai Bà Trưng, Tân An, Ninh Kiều, Cần Thơ</p>
        <h4>Một số về Bến Ninh Kiều được khách du lịch chụp lại:</h4>
        <div class="user-carousel-img">
            <v-carousel
                    cycle
                    height="640"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <template v-slot:prev="{ on, attrs }">
                    <v-btn
                        color="info"
                        v-bind="attrs"
                        v-on="on"
                    ><i class="fa-solid fa-angle-left"></i></v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                    <v-btn
                        color="info"
                        v-bind="attrs"
                        v-on="on"
                    ><i class="fa-solid fa-angle-right"></i></v-btn>
                    </template>
                    <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    >
                    <v-sheet
                        :color="colors[i]"
                        height="100%"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <div class="text-h2">
                            {{ slide }} Slide
                        </div>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
        </div>
        <div class="row">
            <div class="col-md-6 user-detailTA-video">
                <h4>Video giới thiệu về bến Ninh Kiều</h4>
                <iframe width="550" height="320"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
            <div class="col-md-6 user-detailTA-map">
                <h4>Ví trí Bến Ninh Kiều trên Google Map</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.813162538493!2d105.78604211474247!3d10.032271492828993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a06298aae43e71%3A0xc6a64bdac582285d!2zQuG6v24gTmluaCBLaeG7gXU!5e0!3m2!1svi!2s!4v1646131160778!5m2!1svi!2s" width="550" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <h4 class="text-center my-5">Đánh giá của khách du lịch khi đến Bến Ninh Kiều: 3.0 <span class="fa fa-star checked"></span></h4>
        <div class="mt-3">
            <button type="button"  class="btn btn-primary mb-5">Đăng nhập để viết đánh giá</button>
        </div>
        <div class="user-evaluateTA">
            <div class="row">
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <div>
                                <i>Đánh giá 1 tháng trước</i>
                                <i class="fa-solid fa-bars ml-2"></i>
                            </div>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                Địa điểm mình thích nhất khi du lịch tại miền tây 
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <i>Đánh giá 1 tháng trước</i>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <i>Đánh giá 1 tháng trước</i>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="user-card-evaluate p-2 mx-1">
                        <div>
                            <div class="user-logo-name-time">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                                Nguyễn Văn A
                            </div>
                            <div>
                                <i>Đánh giá 1 tháng trước</i>
                                
                            </div>
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                            <div>
                                Địa điểm mình thích nhất khi du lịch tại miền tây
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="text-center mt-3">
                <button type="button"  class="btn btn-primary  w-25">Xem Thêm (Còn 5 đánh giá khác)</button>
           </div>
        </div>
         <h4>Bình luận của thành viên</h4>
         <div>
              <div class="my-1">
                <button type="button"  class="btn btn-primary mb-5">Đăng nhập để viết bình luận</button>
            </div>
             <div class="user-card-evaluate p-2 mx-1">
                <div>
                    <div class="user-logo-name-time">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7mWcFQ-e97tkOw1TN2252vi4gLuYMTbvXQ&usqp=CAU" class="user-avatar-evaluate" alt="">
                        Nguyễn Văn A
                    </div>
                    <i>Đánh giá 1 tháng trước</i>
                </div>
                    <div>
                        Địa điểm mình thích nhất khi du lịch tại miền tây 
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button type="button"  class="btn btn-primary  w-25">Xem Thêm</button>
           </div>
         </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data (){
        return {
            colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
            ],
            slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
            ],
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getDetailTouristAttraction'])
    },
    created(){
        this.id = this.$route.params.id;
        this.getDetailTouristAttraction(this.id);
    }
}
</script>

<style>
    .user-detailTA-video, .user-detailTA-map{
        text-align: center;
    }
    .user-avatar-evaluate{
        width: 5vh;
        height: 5vh;
    }
    .user-card-evaluate{
        border: 1px solid blue;
        border-radius: 20px;
    }
    .user-logo-name-time{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>