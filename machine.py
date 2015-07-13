import glob, sys, os, random
sys.path.append("C:\\Python27\\Scripts\\")
from PIL import Image

def staticNoise(size,outFileName):
	i=0
	pixels = []
	imageSize = (size,size)
	noise = Image.new("1",imageSize)


	while i<size*size:
		pixels.append(random.randint(0,1))
		i+=1

	noise.putdata(pixels)

	try:
		noise.save(outFileName)

	except IOError:
		print "Couldn't save the noise."
		sys.exit(11)



def transparentNoise(size,inFileName,outFileName):

	noise = Image.new("RGBA",(size,size))

	while i<size*size:
		percent = random.random()
		#mask pixel with this transparency

		i+=1

	try:
		noise.save(outFileName)

	except IOError:
		print "Couldn't save the noise."
		sys.exit(12)


staticNoise(50,"wow.png")