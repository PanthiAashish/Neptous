# DO NOT CHANGE OR REMOVE THIS COMMENT, and do not change this import otherwise all tests will fail.
# Use randint to generate random cards. 
from random import randint

# Write all of your part 2B code below this comment. DO NOT CHANGE OR REMOVE THIS COMMENT.
first_starting_hand = randint(1,13)
second_starting_hand = randint(1,13)


if first_starting_hand == 1:
  card_name_1 = 'Ace'
  card_value_1 = 11
elif first_starting_hand == 11:
  card_name_1 = 'Jack'
  card_value_1 = 10
elif first_starting_hand == 12:
  card_name_1 = 'Queen'
  card_value_1 = 10
elif first_starting_hand == 13:
  card_name_1 = 'King'
  card_value_1 = 10
elif first_starting_hand >= 2 or first_starting_hand <= 10:
  card_name_1 = str(first_starting_hand)
  card_value_1 = first_starting_hand



if second_starting_hand == 1:
  card_name_2 = 'Ace'
  card_value_2 = 11
elif second_starting_hand == 11:
  card_name_2 = 'Jack'
  card_value_2 = 10
elif second_starting_hand == 12:
  card_name_2 = 'Queen'
  card_value_2 = 10
elif second_starting_hand == 13:
  card_name_2 = 'King'
  card_value_2 = 10
elif second_starting_hand >= 2 or first_starting_hand <= 10:
  card_name_2 = str(second_starting_hand)
  card_value_2 = second_starting_hand

if first_starting_hand == 1 or first_starting_hand == 8:
    print('Drew an '+ card_name_1)
else:
  print('Drew a ' + card_name_1)


if second_starting_hand == 1 or second_starting_hand == 8:
  print('Drew an '+ card_name_2)
else:
  print('Drew a ' + card_name_2)


hand_value = card_value_1 + card_value_2

user_input = input("You have {}. Hit (y/n)? ".format(hand_value))


if user_input != 'y' and user_input != 'n':
   bool_var = True

while bool_var:
  print("Sorry I didn't get that.")
  user_input = input("You have {}. Hit (y/n)? " .format(hand_value))
  if (user_input == 'y' or user_input == 'n'):
    bool_var = False

   


while user_input == 'y' and hand_value < 21:
  another_card = randint(1,13)

  if another_card == 1:
    another_card_name = 'Ace'
    another_card_value = 11
  elif another_card == 11:
    another_card_name = 'Jack'
    another_card_value = 10
  elif another_card == 12:
    another_card_name = 'Queen'
    another_card_value = 10
  elif another_card == 13:
    another_card_name = 'King'
    another_card_value = 10
  elif another_card >= 2 or another_card <= 10:
    another_card_name = str(another_card)
    another_card_value = another_card


    
  if another_card == 1 or another_card == 8:
    print('Drew an '+ another_card_name)
  else:
    print('Drew a ' + another_card_name)


  hand_value = hand_value + another_card_value


if hand_value < 21:
  print("Final hand: {}{}".format(str(hand_value), '.'))

elif hand_value == 21:
  print("Final hand: {}{}".format(str(hand_value), '.'))
  print("BLACKJACK!")

elif hand_value > 21:
  print("Final hand: {}{}".format(str(hand_value), '.'))
  print("BUST.")





