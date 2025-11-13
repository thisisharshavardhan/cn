
def charStuff(flagbyte, escbyte, payload):

    x = payload.replace(escbyte, escbyte * 2)

    y = x.replace(flagbyte, escbyte + flagbyte)
    return flagbyte + y + flagbyte


def charDestuff(flagbyte, escbyte, payload):

    x = payload.replace(escbyte * 2, escbyte)

    y = x.replace(escbyte + flagbyte, flagbyte)

    return y[1:-1]



msg = input("Enter some message: ")
fb = input("Enter flag byte: ")
eb = input("Enter escape (Esc) byte: ")

print("\nOriginal Message:", msg)

stf = charStuff(fb, eb, msg)
print("Message after Character Stuffing:", stf)

dstf = charDestuff(fb, eb, stf)
print("Message after Character De-stuffing:", dstf)
