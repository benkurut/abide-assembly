/**
 * Leaders Section - Pastor & Kurut Family
 * Displays pastor biography and family story with photo
 */
import { motion } from 'framer-motion';

export default function Leaders() {
  const familyPhotoUrl = `${import.meta.env.BASE_URL}A6704762.jpg`;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto my-20 space-y-16 px-4"
      id="leaders"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Meet Our Pastor */}
      <motion.div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-12 md:p-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-accent text-4xl md:text-5xl font-display font-bold mb-8 text-center tracking-tight"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Pastor & Family
        </motion.h2>

        {/* Pastor Bio */}
        <motion.div
          className="mb-14 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3 className="text-accent text-3xl font-display font-bold tracking-tight" variants={itemVariants}>
            Pastor Bensundeep Kurut
          </motion.h3>

          <motion.p className="text-slate-700 leading-relaxed text-base" variants={itemVariants}>
            Pastor Bensundeep Kurut and his wife, Anupama Kurut, are the founders of Abide Assembly of God — a Spirit-filled, Bible-based community called to inspire all people to seek the truth that brings abundant life, found only in and through Jesus Christ. His life is a vivid testimony that God does not call the equipped; He equips the called.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">A Story Written by Grace</h4>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>
                Pastor Ben grew up in a Christian home in India, raised by loving, well-educated parents who made Sunday worship a cornerstone of family life. When a painful season of church hurt caused his father to step away from ministry, it left a quiet mark on their home — and unbeknownst to anyone, God was already at work writing a far greater story.
              </p>
              <p>
                It was in that very season that he met Anupama, a young woman from a Hindu background who would one day become his wife, his ministry partner, and one of the clearest signs of God's grace in his life. Even before Pastor Ben fully understood his own faith, he found himself pointing her to Jesus — encouraging her to pray and trust that Christ would answer. He had no idea God was building something eternal through that simple act of faith.
              </p>
              <p>
                In 2008, the two chose each other and chose to trust God with their future. Pastor Ben moved to the United States in 2009, and before Anupama joined him, he prayed with urgency for one thing: a Christ-centered church community. God answered supernaturally. When Anupama arrived, they found a church where the Holy Spirit was moving — and for the first time, Pastor Ben's relationship with Jesus moved from religious duty to living encounter. In 2010, they were both baptized in the same church in Albany, NY, and relocated to New York City, where transformation took hold in a way that neither of them could have scripted.
              </p>
              <p>
                In NYC, a passion for teaching the truth of Scripture emerged and deepened. Pastors began to speak prophetically over him, declaring that God would use his family for His Kingdom. He did not yet fully understand it — but he did what he knew to do: serve faithfully, wherever God opened a door. When God led the family to Cleveland, the calling crystallized. With the prayerful support of Pastor Dan DeLembo and the leadership at Calvary Assembly of God, Pastor Ben stepped into what God had been preparing him for all along.
              </p>
              <p className="italic text-accent font-semibold">
                "To live is Christ, and to die is gain. One day I want to stand before Jesus and hear Him say: Well done, good and faithful servant." — Philippians 1:21 / Matthew 25:23
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Serving, Building & Multiplying</h4>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              Before planting Abide, Pastor Ben served for over a decade across two churches — as Media Director, board member, and teacher at Bethlehem Punjabi Church in New York (2010–2018), and for a year as a member on the Board of Trustees at Calvary. And now he is continuing to serve as Media Lead, Bible Study teacher, and as a board member at Calvary Assembly of God. He holds multiple graduate degrees in technology and completed his ministerial training through the Ohio School of Ministry, receiving his Assemblies of God credentials in October 2025.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base mt-4">
              Under his leadership, Abide has already made its mark on the community through outreach initiatives, including a Kids Mini Summer Camp, Back-to-School Backpack Giveaway, International Student BBQ, Christmas Outreach, and a Couples' Luncheon. Abide was honored with the 2025 Church Multiplication Driver Award by the Ohio Ministry Network, and Pastor Ben, along with his family, has twice attended the nationwide Church Multiplication Network (CMN) Conference in Texas.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base mt-4">
              Pastor Bensundeep Kurut once thought he could never be used by God. He now stands as living proof that God's grace has no limits — and that Abide Church is the beautiful fruit of a life fully surrendered to Christ.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* The Kurut Family */}
      <motion.div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-12 md:p-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-accent text-4xl md:text-5xl font-display font-bold mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Kurut Family
        </motion.h2>

        {/* Family Photo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={familyPhotoUrl}
            alt="The Kurut Family - Pastor Ben, Anupama, and Athira"
            className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Family Story */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p className="text-slate-700 leading-relaxed text-sm md:text-base text-center" variants={itemVariants}>
            The story of the Kurut family is, at its heart, a story of what God can do when two people say yes to each other, and to Him. Their journey is marked by faith against the odds, God's powerful grace and mercy in unexpected places, and a calling that has shaped every chapter of their lives together.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h3 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Ben & Anu — A Love Story Redeemed by God's Grace</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>
                Ben and Anu have been inseparable since the 10th grade — high school sweethearts whose bond survived distance, family opposition, and the unknown. Anu comes from a Hindu family, and when her parents discovered the relationship, they objected strongly. Yet God was writing a story neither family could see. Through Ben's quiet, faith-filled encouragement, Anu began to pray — and the God who answers prayer drew her to Himself.
              </p>
              <p>
                When they married in 2008 and eventually made their home in the United States, God honored their faith with a Spirit-filled church community that became the birthplace of their transformation. And their life in ministry has been flourishing ever since.
              </p>
              <p>
                Anupama is a living and walking testimony of God's supernatural healing from a ruptured brain aneurysm in 2021. A woman of deep faith, vibrant worship, and genuine love for people. A trained pharmacist, her true calling has always been in the house of God. She led worship at Bethlehem Punjabi Church in New York and served four years as Women's Ministry Director at Calvary Assembly of God. Currently pursuing her own ministerial credentials, she is a true co-laborer in the gospel — not simply a pastor's wife, but a minister in her own right.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Athira Kurut — A Next-Generation Worshipper</h3>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              Born in New York City in 2013, Athira is the joy of the Kurut family; her name means prayer. She plays the guitar, serves on the Youth worship team, and expresses her love for God through a creative, artistic spirit that lights up every room she enters. Joyful, social, and deeply loved, she is a living reminder of why the mission of Abide Church matters for every generation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">A Family at Home in Community</h3>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              The Kuruts are a family that thrives around people. They love gathering, serving, and making others feel at home — values that flow naturally into everything Abide Church does. They enjoy long drives together and hold a deep affection for Albany, New York, Lancaster, and Chicago, cities woven into the chapters of their story.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base mt-4">
              God's grace brought them here. Grace sustains them. And by grace, the best of their story is still to come.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
