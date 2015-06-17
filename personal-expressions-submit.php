	<?php 
		
		$sectionName = "personal-expressions"
		
	?>



	<?php include('incl/header-scripts.php') ?>

		<section class = "large-6 full-height">
			
			<div class = "content-wrapper vertical-center">
				<p class = "park-name"><a href = "index.php"><span class = "break">Restland</span> Memorial Park</a></p>
				
				<span class = "line-break"></span>
				
				<h1><span class = "break">Personal</span> Expressions</h1>
				
				
				<div class = "button-wrapper centered">
					<a href = "visit.php" class = "rounded-button white">Directions</a>
					<a href = "photo-gallery.php" class = "rounded-button white">View Photo Gallery</a>
				</div>
				
				<div class = "background-images">
					<ul>
						<li><img src="http://placehold.it/800x700/990000/000000"></li>
						<li><img src="http://placehold.it/800x700/00ff00/000000"></li>
						<li><img src="http://placehold.it/800x700/666666/000000"></li>
					</ul>
				</div>
			
			</div>
			
			
			<?php include('incl/primary-nav.php') ?>			
		</section>
		
		<section class = "large-6 float-right off-screen">
			
			<?php include('incl/personal-expressions-nav.php') ?>			
			
			<div class = "content-wrapper interior">
				
				<h2 id = "personal-expressions">Submit Your Personal Expressions</h2>
                <form>
                    <input type="text" name="email" placeholder="Your First Name" />
                    <input type="text" name="email" placeholder="Your Last Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="email" placeholder="Phone Number" />
                    <input type="text" name="email" placeholder="Name of Deceased" />
                    <input type="text" name="email" placeholder="Relationship to Deceased" />
                    <textarea placeholder = "What can we help you with?"></textarea>
					
					<div class = "button-wrapper">
	                    <button class = "rounded-button grey">Submit</button>
					</div>
                </form>  
			
			
			
			</div>

			<?php include('incl/footer.php') ?>

		</section>


	<?php include('incl/footer-scripts.php') ?>